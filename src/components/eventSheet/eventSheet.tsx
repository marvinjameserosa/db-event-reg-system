"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react" // Import useState

export function EventSheet() {
  const [isSheetOpen, setIsSheetOpen] = useState(false) // Manage sheet visibility
  const handleSheetOpen = () => {
    setIsSheetOpen(true) // Open the sheet when a card is clicked
  }

  const handleSheetClose = () => {
    setIsSheetOpen(false) // Close the sheet
  }

  // State to manage the input values
  const [name, setName] = useState("Pedro Duarte")
  const [username, setUsername] = useState("@peduarte")

  // Handle change for the name input field
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  // Handle change for the username input field
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  return (
    <div className="mx-80 p-4">
      <div>
        <Carousel className="w-full min-w-min">
          <h2 className="text-white">
            <b>Popular Events</b>
          </h2>
          <p className="text-gray-400">PUP Main</p>
          <CarouselContent>
            {/*--------------EVENT 1----------------------*/}
            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
              <div className="p-1" onClick={handleSheetOpen}>
                {/* Open the sheet when clicked */}
                <Card className="bg-white bg-opacity-0 inline-flex items-center p-2 space-x-2 border-none">
                  <div className="w-1/2">
                    <Image
                      src="/discover-images/event1.png"
                      alt="Image"
                      className="rounded-md object-cover"
                      width={2000}
                      height={180}
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <CardContent className="p-0">
                      <p className="text-red-800">
                        <b>CPE FAIR 2025: Grand Prix</b>
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        Today, 8:00 am
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        NDC Court
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>

            {/*--------------EVENT 2----------------------*/}
            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
              <div className="p-1" onClick={handleSheetOpen}>
                {/* Open the sheet when clicked */}
                <Card className="inline-flex items-center p-2 space-x-2 border-none">
                  <div className="w-1/2">
                    <Image
                      src="/discover-images/event1.png"
                      alt="Image"
                      className="rounded-md object-cover"
                      width={2000}
                      height={180}
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <CardContent className="p-0">
                      <p className="text-red-800">
                        <b>CPE FAIR 2025: Grand Prix</b>
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        Today, 8:00 am
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        NDC Court
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>

            {/*--------------EVENT 3----------------------*/}
            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
              <div className="p-1" onClick={handleSheetOpen}>
                {/* Open the sheet when clicked */}
                <Card className="inline-flex items-center p-2 space-x-2 border-none">
                  <div className="w-1/2">
                    <Image
                      src="/discover-images/event1.png"
                      alt="Image"
                      className="rounded-md object-cover"
                      width={2000}
                      height={180}
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <CardContent className="p-0">
                      <p className="text-red-800">
                        <b>CPE FAIR 2025: Grand Prix</b>
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        Today, 8:00 am
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        NDC Court
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>

            {/*--------------EVENT 4----------------------*/}
            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
              <div className="p-1" onClick={handleSheetOpen}>
                {/* Open the sheet when clicked */}
                <Card className="inline-flex items-center p-2 space-x-2 border-none">
                  <div className="w-1/2">
                    <Image
                      src="/discover-images/event1.png"
                      alt="Image"
                      className="rounded-md object-cover"
                      width={2000}
                      height={180}
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <CardContent className="p-0">
                      <p className="text-red-800">
                        <b>CPE FAIR 2025: Grand Prix</b>
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        Today, 8:00 am
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        NDC Court
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>


            {/* Sheet (Triggered by Card Click) */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetContent className="md:basis-1/1 lg:basis-1/2 bg-red-300">
                <SheetHeader>
                  <SheetTitle >Register to Event</SheetTitle>
                  <SheetDescription className="text-gray-900">
                    This section is still for consultation. Click the register button to register
                  </SheetDescription>
                </SheetHeader>
                <div className="p-2 justify-center">
                    <Image
                      src="/discover-images/event1.png"
                      alt="Image"
                      className="rounded-md object-cover"
                      width={2000}
                      height={180}
                    />
                  </div>
                  <p className="text-red-800">
                        <b>CPE FAIR 2025: Grand Prix</b>
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        Today, 8:00 am
                      </p>
                      <p className="text-red-800 text-opacity-80 text-sm">
                        NDC Court
                      </p>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    {/* Controlled input for the name field */}
                    <Input
                      id="name"
                      value={name} // Controlled value
                      onChange={handleNameChange} // onChange handler
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    {/* Controlled input for the username field */}
                    <Input
                      id="username"
                      value={username} // Controlled value
                      onChange={handleUsernameChange} // onChange handler
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" onClick={handleSheetClose} className="" variant={"secondary"}>
                      Register
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
