"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  CalendarDays,
  TrendingUp,
  DollarSign,
  PlusCircle,
  ChevronRight,
  Clock,
  MapPin,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with actual API calls
const mockStats = {
  totalBookings: 156,
  activeUsers: 89,
  revenue: 12580,
  occupancyRate: 75,
};

const mockTurfs = [
  {
    id: 1,
    name: "Green Valley Turf",
    location: "123 Sports Complex, Kampala",
    status: "active",
    bookingsToday: 8,
    revenue: 450,
  },
  // ...add more mock turfs
];

const mockRecentBookings = [
  {
    id: 1,
    turfName: "Green Valley Turf",
    customerName: "John Doe",
    date: "2024-02-25",
    time: "14:00 - 16:00",
    status: "confirmed",
    amount: 100,
  },
  // ...add more mock bookings
];

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-100">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your turfs and bookings</p>
          </div>
          <Button
            onClick={() => router.push("/admin-turf/register")}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Register New Turf
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <CalendarDays className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <p className="text-2xl font-bold">
                    {mockStats.totalBookings}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Users</p>
                  <p className="text-2xl font-bold">{mockStats.activeUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold">${mockStats.revenue}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Occupancy Rate</p>
                  <p className="text-2xl font-bold">
                    {mockStats.occupancyRate}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Turfs Overview */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Your Turfs</h2>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/admin-turf/turfs")}
                  >
                    View All
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {mockTurfs.map((turf) => (
                    <div
                      key={turf.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold">{turf.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          {turf.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="text-sm">
                          <p className="text-gray-500">Today's Bookings</p>
                          <p className="font-semibold">{turf.bookingsToday}</p>
                        </div>
                        <div className="text-sm">
                          <p className="text-gray-500">Revenue</p>
                          <p className="font-semibold">${turf.revenue}</p>
                        </div>
                        <Badge
                          variant={
                            turf.status === "active" ? "success" : "secondary"
                          }
                          className="ml-2"
                        >
                          {turf.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Bookings */}
          <div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Recent Bookings</h2>
                <div className="space-y-4">
                  {mockRecentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-4 bg-gray-50 rounded-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">
                          {booking.customerName}
                        </h4>
                        <Badge variant="outline">{booking.status}</Badge>
                      </div>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {booking.turfName}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          {booking.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {booking.time}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-semibold">
                          ${booking.amount}
                        </span>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}