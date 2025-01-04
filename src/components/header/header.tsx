import { Button } from "@/components/ui/button"
import { Bell, Calendar, Compass, PlusCircle, Search } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="w-full bg-gradient-to-b from-[#4A0E0E] to-[#A61B1B] to-100%">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/discover" className="font-bold text-2xl mr-auto text-gray-300">Logo</Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-80">
              <Link href="/discover">
                <Button variant="ghost" size="default">
                  <Compass className="h-5 w-5 mr-2 text-gray-500" />
                  Discover
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="ghost" size="default">
                  <Calendar className="h-5 w-5 mr-2 text-white" />
                  Events
                </Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only ext-gray-500">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only ext-gray-500">Notifications</span>
            </Button>
            <Link href="/createEvent">
              <Button>
                <PlusCircle className="h-5 w-5 mr-2" />
                Create Event
              </Button>
            </Link>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}