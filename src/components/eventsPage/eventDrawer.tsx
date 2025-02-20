"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

interface EventData {
  id: string
  capacityLimit: string
  createdAt: string
  createdBy: string
  description: string
  endDate: string
  startDate: string
  startTime: string
  endTime: string
  eventName: string
  eventPoster: string
  isVirtual: boolean
  location: string
  participantApprovals: Array<any>
}

interface EventDrawerProps {
  event: EventData | null
  isOpen: boolean
  onClose: () => void
}

export default function EventDrawer({ event, isOpen, onClose }: EventDrawerProps) {
  if (!event) return null

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[425px] bg-[#f2f3f7]/60 text-white">
        <SheetHeader>
          <SheetTitle className="text-2xl text-[#a41e1d] font-bold p-2">{event.eventName}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-120px)] pr-4">
          <img
            src={event.eventPoster || "/placeholder.svg"}
            alt={event.eventName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="space-y-4 text-[#a41e1d]">
            <div className="flex items-center space-x-2 text-[#a41e1d]">
                <CalendarDays className="h-5 w-5 text-[#a41e1d]" />
                <span>
                  {new Date(event.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[#a41e1d]">
                <Clock className="h-5 w-5 text-[#a41e1d]" />
                <span>
                  {event.startTime} - {event.endTime}
                </span>
              </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#a41e1d]" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-[#a41e1d]">
              <Users className="h-5 w-5 text-[#a41e1d]" />
              <span>{event.participantApprovals.length} attendees</span>
            </div>
            <SheetDescription className="text-[#a41e1d]">{event.description}</SheetDescription>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

