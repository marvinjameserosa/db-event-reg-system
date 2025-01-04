"use client"
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react"
import Link from "next/link";
{/*import Header from "@/components/ui/header/header";
import { EventSheet } from "@/components/ui/eventSheet/eventSheet";*/}
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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



export default function PupBranches() {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Manage sheet visibility

  const handleSheetOpen = () => {
    setIsSheetOpen(true); // Open the sheet when a card is clicked
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false); // Close the sheet
  };

  return (

       <div className="mx-80 p-2 ">
           

            {/*-------------------------------------------EXPLORE PUP BRANCH EVENT SECTION---------------------------------- */}
            <div className="p-1">
              <Tabs defaultValue="account" className="w-full"> 
                <h3 className="text-gray-100"><b>Explore PUP Branch Events</b></h3>

                {/*------------------PUP BRANCHES------------- */}
                  <TabsList className="bg-transparent text-gray-100">
                    <TabsTrigger value="metromanila" >Metro Manila</TabsTrigger>
                    <TabsTrigger value="centralluzon">Central Luzon</TabsTrigger>
                    <TabsTrigger value="southluzon">South Luzon</TabsTrigger>
                  </TabsList>

                  {/*------------------PUP BRANCH CONTENTS------------- */}
                  {/*------Metro Manila---------- */}
                  <TabsContent value="metromanila" className="p-2">
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 w-full">
                      {/* Parañaque City */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Parañaque City</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Quezon City */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Quezon City</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* San Juan City */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">San Juan City</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Taguig City */}
                    <div className="-mt-[50px]">
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 w-1/3 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/puptaguig.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Taguig City</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                  </TabsContent>

                  {/*-----------Central Luzon---------- */}
                  <TabsContent value="centralluzon">
                  <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-0 w-full">
                      {/* Bataan */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Bataan</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sta. Maria Bulacan */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Sta. Maria Bulacan</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Pulilan, Bulacan */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Pulilan, Bulacan</p>
                                <p className="text-gray-100 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Cabiao, Nueva Ecija */}
                    <div className="-mt-[50px]">
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 w-1/3 border-none bg-transparent">
                          
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/puptaguig.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Cabiao, Nueva Ecija</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    
                  </TabsContent>

                  {/*--------------South Luzon---------- */}
                  <TabsContent value="southluzon">
                  <div className="flex flex-col gap-y-6">
                     {/* First Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Lopez, Quezon */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Lopez, Quezon</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Mulanay, Quezon */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Mulanay, Quezon</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Unisan, Quezon */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Unisan, Quezon </p>
                                <p className="text-gray-100 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Ragay, Camarines Sur */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Ragay, Camarines Sur</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sto. Tomas, Batangas */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Sto. Tomas, Batangas</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Maragondon, Cavite */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Maragondon, Cavite</p>
                                <p className="text-gray-100 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                  {/* Third Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Bansud, Oriental Mindoro */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Bansud, Oriental Mindoro</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sablayan, Occidental Mindoro */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Sablayan, Occidental Mindoro</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Binan, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Binan, Laguna</p>
                                <p className="text-gray-100 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                   {/* Fourth Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* San Pedro, Laguna */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">San Pedro, Laguna</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sta. Rosa, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Sta. Rosa, Laguna</p>
                                <p className="text-gray-100 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Calauan, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none bg-transparent">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-gray-100 font-bold">Calauan, Laguna</p>
                                <p className="text-gray-100 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>
                    </div>
                  </TabsContent>
                </Tabs>
            </div>

            <div>
            <Separator className="my-3" />
            </div>
            
            
        </div>
  
       
  );
}
