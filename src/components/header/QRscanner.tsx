"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { Camera, CheckCircle, Loader2, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { auth, db } from "@/app/firebase/config"
import { doc, getDoc, updateDoc } from "firebase/firestore"

interface QRScannerProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function QRScanner({ isOpen, onOpenChange }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [scanResult, setScanResult] = useState<string | null>(null)
  
  // Fixed aspect ratio instead of dynamic one
  const scannerRef = useRef<any>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  
  const handleQRCodeDetected = useCallback(async (decodedText: string) => {
    setIsScanning(false)
    setIsProcessing(true)
    
    if (!auth.currentUser) {
      setIsProcessing(false)
      setScanResult("Authentication required. Please sign in.")
      toast({
        title: "Authentication Required",
        description: "Please sign in to scan tickets.",
        variant: "destructive",
      })
      return
    }
    
    try {
      const { eventId, userId } = JSON.parse(decodedText)
      const userDoc = await getDoc(doc(db, "users", userId))
      
      if (!userDoc.exists()) throw new Error("User not found")
      
      const userData = userDoc.data()
      const events = userData.registeredEvents || {}
      
      if (!events[eventId]) {
        setScanResult("Event not registered for this user")
        return
      }
      
      if (events[eventId] === true) {
        setScanResult("Ticket already used")
        return
      }
      
      await updateDoc(doc(db, "users", userId), {
        [`registeredEvents.${eventId}`]: true
      })
      
      setScanResult("Attendance marked successfully")
    } catch (error) {
      console.error("QR Processing Error:", error)
      setScanResult(`Error: ${error instanceof Error ? error.message : "Failed to process QR code"}`)
    } finally {
      setIsProcessing(false)
    }
  }, [])
  
  const stopScanner = useCallback(async () => {
    try {
      if (scannerRef.current) {
        await scannerRef.current.stop()
        scannerRef.current.clear()
        scannerRef.current = null
      }
    } catch (error) {
      console.warn("Error stopping scanner:", error)
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    
    if (containerRef.current) {
      containerRef.current.innerHTML = '' // Clear DOM elements
    }
    
    setIsScanning(false)
  }, [])
  
  const startScanner = useCallback(async () => {
    await stopScanner()
    
    try {
      const { Html5Qrcode } = await import('html5-qrcode')
      
      if (!containerRef.current) throw new Error("Scanner container not found")
      
      const scannerId = "qr-scanner-" + Date.now()
      containerRef.current.innerHTML = `<div id="${scannerId}" style="width: 100%; height: 100%;"></div>`
      
      scannerRef.current = new Html5Qrcode(scannerId)
      const cameras = await Html5Qrcode.getCameras()
      
      if (!cameras.length) throw new Error("No cameras found")
      
      const cameraId = cameras.find(cam => /back|rear|environment/i.test(cam.label))?.id || cameras[0].id
      
      await scannerRef.current.start(
        { deviceId: cameraId },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          // Fixed aspect ratio to 4:3 which is standard for most cameras
          aspectRatio: 4/3,
          disableFlip: true,
        },
        handleQRCodeDetected
      )
      
      // Access and style video element
      const videoElement = containerRef.current.querySelector("video") as HTMLVideoElement | null
      if (videoElement) {
        videoElement.playsInline = true
        videoElement.style.objectFit = "cover"
        videoElement.style.width = "100%"
        videoElement.style.height = "100%"
        
        // Force the video to maintain the fixed aspect ratio
        videoElement.style.aspectRatio = "4/3"
      }
      
      // Remove unwanted overlays
      const overlays = containerRef.current.querySelectorAll(".qr-code-full-region, canvas")
      overlays.forEach(el => {
        if (el instanceof HTMLElement) {
          el.remove()
        }
      })
      
      setIsScanning(true)
      setCameraError(null)
    } catch (error) {
      console.error("Scanner Error:", error)
      setCameraError(error instanceof Error ? error.message : "Failed to start scanner")
      stopScanner()
    }
  }, [handleQRCodeDetected, stopScanner])
  
  useEffect(() => {
    if (isOpen) {
      startScanner()
    } else {
      stopScanner()
      setScanResult(null)
      setCameraError(null)
    }
    
    return () => {
      stopScanner() // Cleanup on unmount
    }
  }, [isOpen, startScanner, stopScanner])
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-red-800">
        <DialogHeader>
          <DialogTitle className="text-center text-white">Scan QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          {/* Scanner Container - Fixed aspect ratio */}
          <div
            ref={containerRef}
            className="relative w-full max-w-[300px] bg-black rounded-lg overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          />
          
          {/* Loading State */}
          {!isScanning && !cameraError && !scanResult && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
          )}
          
          {/* Error State */}
          {cameraError && (
            <div className="p-4 w-full bg-black/10 rounded-lg">
              <div className="text-center text-white">
                <X className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm">{cameraError}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    setCameraError(null)
                    startScanner()
                  }}
                >
                  Retry
                </Button>
              </div>
            </div>
          )}
          
          {/* Result Display */}
          {scanResult && (
            <div className="w-full text-center p-4 rounded-lg bg-slate-50">
              {isProcessing ? (
                <Loader2 className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                <>
                  <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-500" />
                  <p>{scanResult}</p>
                </>
              )}
            </div>
          )}
          
          <Button
            variant="default"
            className="w-full bg-white/10 text-white hover:bg-[#722120]"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}