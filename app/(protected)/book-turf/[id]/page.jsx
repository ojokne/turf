"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, CalendarDays } from "lucide-react";

import { StarRating } from "@/components/star-rating";

const mockBookings = [
  {
    turfId: 1,
    date: "2024-02-19",
    startTime: "14:00",
    endTime: "16:00",
  },
  {
    turfId: 1,
    date: "2024-02-19",
    startTime: "18:00",
    endTime: "20:00",
  },
];

const turfs = [
  {
    id: 1,
    name: "Green Valley Turf",
    price: 50,
    description: "A lush, well-maintained turf with excellent drainage.",
    facilities: ["Floodlights", "Changing Rooms", "Parking"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "123 Green Valley Road",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 },
    },
  },
  {
    id: 2,
    name: "City Central Field",
    price: 55,
    description:
      "Located in the heart of the city, perfect for after-work games.",
    facilities: ["Floodlights", "Cafe", "Public Transport"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "123 Central Road",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
    },
  },
  {
    id: 3,
    name: "Riverside Pitch",
    price: 45,
    description: "A scenic turf by the river with a great atmosphere.",
    facilities: ["Spectator Seating", "Barbecue Area", "Parking"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "123 Riverside Road",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
    },
  },
  {
    id: 4,
    name: "Sunset Arena",
    price: 60,
    description: "Premium turf with state-of-the-art facilities.",
    facilities: ["Floodlights", "Gym", "Cafe", "Changing Rooms"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "Arena Street",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
    },
  },
  {
    id: 5,
    name: "Mountain View Ground",
    price: 40,
    description: "A budget-friendly option with a beautiful mountain backdrop.",
    facilities: ["Basic Changing Rooms", "Parking"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "123 Mountain View Road",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
    },
  },
  {
    id: 6,
    name: "Tech Park Turf",
    price: 65,
    description: "High-tech turf with advanced booking system and analytics.",
    facilities: ["Smart Lighting", "Performance Tracking", "Changing Rooms"],
    rating: 4.5,
    totalReviews: 128,
    location: {
      address: "Green Valley Road",
      city: "Kampala",
      coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
    },
  },
];
export default function BookingPage() {
  const { id } = useParams();
  const turf = turfs.find((t) => t.id.toString() === id);

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [hours, setHours] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  

  if (!turf) return <div>Turf not found</div>;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{turf.name}</h1>
          <p className="text-gray-500 mt-2 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {turf.location.address}, {turf.location.city}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Turf Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Image Gallery */}
            <div className="rounded-xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/turf-2.jpeg"
                alt={turf.name}
                width={800}
                height={400}
                className="w-full object-cover h-[400px]"
              />
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Duration</span>
                </div>
                <p className="mt-1 font-semibold">1-4 hours</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Capacity</span>
                </div>
                <p className="mt-1 font-semibold">22 players</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="h-4 w-4" />
                  <span>Rating</span>
                </div>
                <StarRating
                  rating={turf?.rating}
                  totalReviews={turf?.totalReviews}
                />
              </div>
            </div>

            {/* Details Sections */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About this turf</h2>
                <p className="text-gray-600 leading-relaxed">
                  {turf.description}
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-4">Facilities</h2>
                <div className="flex flex-wrap gap-2">
                  {turf.facilities.map((facility) => (
                    <Badge key={facility} variant="secondary">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-4">
            <Card className="sticky top-8 shadow-lg border-0">
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Book this turf</h2>
                    <Badge variant="secondary" className="text-lg">
                      ${turf.price}/hr
                    </Badge>
                  </div>
                  <Separator />
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total amount</span>
                    <span className="text-2xl font-bold">
                      ${turf.price * parseInt(hours || 1)}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    disabled={!startTime || isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        Processing...
                      </div>
                    ) : (
                      "Proceed to Payment"
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
