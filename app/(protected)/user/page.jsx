"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  History,
  Calendar,
  Trophy,
  Activity,
  Wallet,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Mock data - replace with actual API calls
const mockBookings = [
  {
    id: 1,
    turfName: "Green Valley Turf",
    date: "2024-02-25",
    startTime: "14:00",
    endTime: "16:00",
    status: "upcoming",
    price: 100,
    location: "123 Green Valley Road, Kampala",
  },
  {
    id: 2,
    turfName: "City Central Field",
    date: "2024-02-19",
    startTime: "18:00",
    endTime: "20:00",
    status: "completed",
    price: 110,
    location: "456 Central Road, Kampala",
  },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const router = useRouter();

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12 bg-white rounded-2xl p-8  overflow-hidden shadow-lg">
          <div className="relative z-10 flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
              <User className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-primary/80">
                Ready for your next game?
              </p>
            </div>
          </div>
          
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Games Played</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 group-hover:scale-110 transition-transform">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours Played</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Spent</p>
                  <p className="text-2xl font-bold">$580</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 rounded-2xl">
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Ready for Your Next Match?</h2>
              <p className="text-white/90 max-w-md">
                Book your preferred turf now and enjoy the game with your team. Multiple locations and time slots available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 hover:text-green-700"
                onClick={() => router.push('/book-turf')}
              >
                Book a Turf Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Tabs defaultValue="upcoming" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Your Bookings</h2>
              <TabsList className="bg-gray-100">
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  History
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-4">
              {mockBookings
                .filter((booking) => booking.status === "upcoming")
                .map((booking) => (
                  <Card
                    key={booking.id}
                    className="group hover:shadow-lg transition-all  border-gray-100"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                              <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {booking.turfName}
                              </h3>
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-700"
                              >
                                {booking.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 text-gray-400" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span>
                                {booking.startTime} - {booking.endTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 col-span-2">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="text-2xl font-bold text-primary">
                            ${booking.price}
                          </p>
                          <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                            View Details →
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              {mockBookings
                .filter((booking) => booking.status === "completed")
                .map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">
                            {booking.turfName}
                          </h3>
                          <div className="flex flex-col gap-1 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>
                                {booking.startTime} - {booking.endTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge
                            className={getStatusColor(booking.status)}
                            variant="secondary"
                          >
                            {booking.status}
                          </Badge>
                          <p className="text-lg font-bold">${booking.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
