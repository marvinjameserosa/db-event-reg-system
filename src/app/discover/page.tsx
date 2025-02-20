"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "@/app/firebase/config";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import EmblaCarousel from "@/components/discover/emblaCarousel";
import EmblaSheet from "@/components/discover/emblaSheet";
import SearchDiscover from "@/components/discover/searchDiscover";
import Header from "@/components/header/header";
import { SlideType } from "@/types/slideTypes";
import "./embla.css";

interface EventData {
  capacityLimit: string;
  createdAt: string;
  createdBy: string;
  description: string;
  endDate: string;
  startDate: string;
  startTime: string;
  endTime: string;
  eventName: string;
  eventPoster: string;
  isVirtual: boolean;
  location: string;
  participantApprovals: Array<any>;
}

export default function DiscoverPage() {
  const [selectedEvent, setSelectedEvent] = useState<SlideType | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [events, setEvents] = useState<SlideType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/"); 
      }
    });

    return () => unsubscribe(); 
  }, [router]);

  useEffect(() => {
    if (!isAuthenticated) return; 

    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));

      const fetchUserName = async (userId: string) => {
        try {
          const userDocRef = doc(db, "users", userId);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const firstName = userData.firstName;
            const lastName = userData.lastName;
            return firstName.concat(" ", lastName) || userData.displayName || "Unknown User";
          }
          return "Unknown User";
        } catch (error) {
          console.error("Error fetching user:", error);
          return "Unknown User";
        }
      };

      const eventsData: SlideType[] = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data() as EventData;
          const hostName = await fetchUserName(data.createdBy);

          const formatDate = (dateString: string) =>
            new Date(dateString).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });

          const formatTime = (timeString: string) => {
            const [hours, minutes] = timeString.split(":");
            const date = new Date();
            date.setHours(parseInt(hours), parseInt(minutes));
            return date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
          };

          return {
            id: doc.id,
            image: data.eventPoster || "/placeholder.svg",
            title: data.eventName,
            description: data.description || "No description available",
            details: `Hosted by: ${hostName}`,
            date: formatDate(data.startDate),
            time: formatTime(data.startTime),
            startDate: formatDate(data.startDate),
            endDate: formatDate(data.endDate),
            startTime: formatTime(data.startTime),
            endTime: formatTime(data.endTime),
            location: data.location,
            host: hostName,
            availableSlots: parseInt(data.capacityLimit) || 0,
            totalSlots: parseInt(data.capacityLimit) || 0,
            isCreator: false,
          };
        })
      );

      setEvents(eventsData);
    };

    fetchEvents();
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Checking authentication...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; 
  }

  const filteredSlides = events.filter(
    (slide) =>
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (slide: SlideType) => {
    setSelectedEvent(slide);
    setSheetOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#f2f3f7] bg-fixed">
      <Header />
      <div className="w-full px-6 py-6 max-w-[1360px] mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-[#a41e1d]">Discover Events</h1>
            <p className="text-m text-gray-700">
              Explore upcoming events and register easily.
            </p>
          </div>
          <SearchDiscover onSearch={setSearchQuery} />
        </div>
        <Suspense fallback={<div className="text-center text-gray-300">Loading carousel...</div>}>
          <EmblaCarousel slides={filteredSlides} onCardClick={handleCardClick} />
        </Suspense>
      </div>
      <EmblaSheet
        isOpen={isSheetOpen}
        onClose={() => setSheetOpen(false)}
        event={selectedEvent}
      />
    </div>
  );
}
