import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { SlideType } from '@/types/slideTypes';
import { auth, db } from "@/app/firebase/config";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";

type EmbalaSheetType = {
  isOpen: boolean;
  onClose: () => void;
  event: SlideType | null;
};

export default function EmblaSheet({ isOpen, onClose, event }: EmbalaSheetType) {
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const router = useRouter();

  if (!event) return null;

  const handleRegister = async () => {
    const user = auth.currentUser;

    if (!user) {
      router.push("/login"); // Redirect if not logged in
      return;
    }

    setLoading(true);

    try {
      const eventRef = doc(db, "events", event.id);
      const eventSnap = await getDoc(eventRef);

      if (eventSnap.exists()) {
        const eventData = eventSnap.data();

        // Check if user is already registered
        if (eventData.registeredUsers?.includes(user.uid)) {
          alert("You are already registered for this event.");
          setRegistered(true);
          setLoading(false);
          return;
        }

        // Check if slots are available
        if (eventData.capacityLimit && eventData.registeredUsers?.length >= parseInt(eventData.capacityLimit)) {
          alert("No more slots available.");
          setLoading(false);
          return;
        }

        // Add the user to registeredUsers array in Firestore
        await updateDoc(eventRef, {
          registeredUsers: arrayUnion(user.uid),
        });

        alert("Successfully registered!");
        setRegistered(true);
      } else {
        alert("Event not found.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] p-0 bg-[#a41e1d]/60 text-gray-200">
        <div className="relative h-full p-6 z-50">
          <SheetHeader>
            <SheetTitle className="text-white mt-20">{event.title}</SheetTitle>
            <SheetClose asChild>
              <button className="absolute top-1 right-3 p-4 rounded-md bg-red-900 text-gray-200 hover:bg-[#8B1212] transition">✖</button>
            </SheetClose>
          </SheetHeader>

          <div className="mt-4 space-y-4">
            <img src={event.image} alt={event.title} className="w-full h-[200px] object-cover rounded-lg shadow-md" />
            <p className="text-gray-300">{event.details}</p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-200" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-200" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-200" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-200" />
                <span>{event.availableSlots} of {event.totalSlots} slots available</span>
              </div>
            </div>

            <div className="mt-6">
              {event.isCreator ? (
                <Link href="/dashboard">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : registered ? (
                <Button disabled className="w-full bg-gray-500 text-white">Already Registered</Button>
              ) : (
                <Button
                  onClick={handleRegister}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Click to Register"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
