"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type UserType = "Student" | "Alumni" | "Faculty";

type SignUpForm2Props = {
  userType: UserType;
  setUserType: (type: UserType) => void; 
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errorMsg?: string;
};

export default function SignUpForm2({ userType, setUserType, onSubmit, errorMsg }: SignUpForm2Props) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/bg3.jpg')] p-4">
      <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
      <Card className="relative z-10 w-[360px] shadow-xl rounded-[24px] bg-[#f2f3f7]/60  backdrop-blur-sm flex flex-col border border-[#302F30]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#a41e1d]">Personal Information</CardTitle>
          <CardDescription className="text-gray-600">Finish creating your account.</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-800">
          <Tabs defaultValue={userType} onValueChange={(value) => setUserType(value as UserType)}>
            <div className="flex flex-col gap-4">
              <TabsList className="flex">
                <TabsTrigger value="Student" className={`flex-1 ${userType === "Student" ? "bg-yellow-500" : "hover:bg-yellow-400"}`}>Student</TabsTrigger>
                <TabsTrigger value="Alumni" className={`flex-1 ${userType === "Alumni" ? "bg-yellow-500" : "hover:bg-yellow-400"}`}>Alumni</TabsTrigger>
                <TabsTrigger value="Faculty" className={`flex-1 ${userType === "Faculty" ? "bg-yellow-500" : "hover:bg-yellow-400"}`}>Faculty</TabsTrigger>
              </TabsList>

              <form onSubmit={onSubmit}>
                <TabsContent value="Student">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" type="text" placeholder="Juan" required />

                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" type="text" placeholder="Dela Cruz" required />

                    <Label htmlFor="student-number">Student Number</Label>
                    <Input id="student-number" name="student-number" type="text" placeholder="2015-001..." required />

                    <Label htmlFor="department">Department</Label>
                    <Select name="department" required>
                      <SelectTrigger id="studentDepartment">
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BSCPE">BS Computer Engineering</SelectItem>
                        <SelectItem value="BSCE">BS Civil Engineering</SelectItem>
                        <SelectItem value="BSEE">BS Electronics Engineering</SelectItem>
                        <SelectItem value="BSIE">BS Industrial Engineering</SelectItem>
                        <SelectItem value="BSME">BS Mechanical Engineering</SelectItem>
                        <SelectItem value="BSCS">BS Computer Science</SelectItem>
                        <SelectItem value="BSA">BS Accountancy</SelectItem>
                        <SelectItem value="BSM">BS Business Management</SelectItem>
                        <SelectItem value="BSArch">BS Architecture</SelectItem>
                        <SelectItem value="BSIT">BS Information Techonology</SelectItem>
                        <SelectItem value="BSMA">BS Management Accounting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="Alumni">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" type="text" placeholder="Juan" required />

                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" type="text" placeholder="Dela Cruz" required />

                    <Label htmlFor="department-graduated">Program Graduated</Label>
                    <Select name="department" required>
                      <SelectTrigger id="department-graduated">
                        <SelectValue placeholder="Select your Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BSCPE">BS Computer Engineering</SelectItem>
                        <SelectItem value="BSCE">BS Civil Engineering</SelectItem>
                        <SelectItem value="BSEE">BS Electronics Engineering</SelectItem>
                        <SelectItem value="BSIE">BS Industrial Engineering</SelectItem>
                        <SelectItem value="BSME">BS Mechanical Engineering</SelectItem>
                        <SelectItem value="BSCS">BS Computer Science</SelectItem>
                        <SelectItem value="BSA">BS Accountancy</SelectItem>
                        <SelectItem value="BSM">BS Business Management</SelectItem>
                        <SelectItem value="BSArch">BS Architecture</SelectItem>
                        <SelectItem value="BSIT">BS Information Techonology</SelectItem>
                        <SelectItem value="BSMA">BS Management Accounting</SelectItem>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="year-graduated">Year Graduated</Label>
                    <Select name="year-graduated" required>
                      <SelectTrigger id="year-graduated">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="Faculty">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" type="text" placeholder="Juan" required />

                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" type="text" placeholder="Dela Cruz" required />

                    <Label htmlFor="faculty-id">Faculty ID Number</Label>
                    <Input id="faculty-id" name="faculty-number" type="text" placeholder="2010-000..." required />

                    <Label htmlFor="department">Department</Label>
                    <Select name="department" required>
                      <SelectTrigger id="facultyDepartment">
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BSCPE">BS Computer Engineering</SelectItem>
                        <SelectItem value="BSCE">BS Civil Engineering</SelectItem>
                        <SelectItem value="BSEE">BS Electronics Engineering</SelectItem>
                        <SelectItem value="BSIE">BS Industrial Engineering</SelectItem>
                        <SelectItem value="BSME">BS Mechanical Engineering</SelectItem>
                        <SelectItem value="BSCS">BS Computer Science</SelectItem>
                        <SelectItem value="BSA">BS Accountancy</SelectItem>
                        <SelectItem value="BSM">BS Business Management</SelectItem>
                        <SelectItem value="BSArch">BS Architecture</SelectItem>
                        <SelectItem value="BSIT">BS Information Techonology</SelectItem>
                        <SelectItem value="BSMA">BS Management Accounting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <Button type="submit" className="w-full mt-6 bg-yellow-500 hover:bg-yellow-800 text-black">Sign up</Button>
              </form>
            </div> 
          </Tabs>     
        </CardContent>
      </Card>
    </div>
  );
}
