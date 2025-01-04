"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Header from "@/components/header/header";
import PupBranches from "@/components/pupBranches/pupBranches";
import { EventSheet } from "@/components/eventSheet/eventSheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Discover() {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Manage sheet visibility

  const handleSheetOpen = () => {
    setIsSheetOpen(true); // Open the sheet when a card is clicked
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false); // Close the sheet
  };

  return (
    // Page Header Section
    <div className="relative min-h-screen bg-gradient-to-b from-[#4A0E0E] to-[#A61B1B] to-80%">
      <div className="absolute inset-0 bg-black/65 mix-blend-multiply  pointer-events-none" />
      <Header />
      <div className="mx-72 p-2">
        <h1 className="justify-center text-[20px] text-gray-100">
          <b>Discover Events</b>
        </h1>
        <p className="text-sm text-gray-100">
          Explore popular events in the university, browse by category or check
          out what exciting events are coming for you...
        </p>
      </div>

      {/*-------------------------------------------POPULAR EVENT SECTION ---------------------------------------------*/}
      <EventSheet />
      <div className="mx-80">
        <Separator className="my-3 " />
      </div>

      {/* ---------------------EXPLORE PUP BRANCH EVENTS--------------------------------*/}
      <PupBranches />

      {/* -------------------------------------------------------------------BROWSE BY CATEGORY SECTION----------------------------------------------*/}
      <div className="mx-80 p-2">
        <div>
          <h4 className=" text-white">
            <b>Browse by category</b>
          </h4>

          <div className="flex flex-col gap-y-6">
            {/* First Row */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {/* Category 1 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category1.png"
                        alt="Parañaque City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">Seminars</p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          10 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>

              {/* Category 2 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category2.png"
                        alt="Quezon City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">Job Fair</p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          10 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>

              {/* Category 3 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category3.png"
                        alt="San Juan City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">Tournaments</p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          25 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {/* Category 4 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category4.png"
                        alt="Parañaque City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">Bootcamps</p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          10 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>

              {/* Category 5 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category5.png"
                        alt="Quezon City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">
                          Career Development
                        </p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          10 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>

              {/* Category 6 */}
              <div>
                <Link href="/samplePage">
                  <Card className="flex items-center p-2 space-x-2 border-none bg-transparent backdrop-blur-md">
                    {/* Image Section */}
                    <div className="w-12 h-12">
                      <Image
                        src="/discover-images/category6.png"
                        alt="San Juan City"
                        className="rounded-md object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* Text Section */}
                    <div className="w-auto">
                      <CardContent className="p-0">
                        <p className="text-gray-300 font-bold">Trainings</p>
                        <p className="text-gray-300 text-sm text-opacity-75">
                          25 Events
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
