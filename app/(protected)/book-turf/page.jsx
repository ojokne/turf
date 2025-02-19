"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import { TurfCard } from "@/components/turf-card";

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

export default function BookTurfPage() {
  const maxPrice = useMemo(() => {
    return Math.ceil(Math.max(...turfs.map((turf) => turf.price)) / 10) * 10;
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [rating, setRating] = useState("");
  const router = useRouter();

  // Filter turfs based on search and filters
  const filteredTurfs = useMemo(() => {
    return turfs.filter((turf) => {
      const searchMatch =
        searchQuery === "" ||
        turf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        turf.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        turf.location.address
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        turf.location.city.toLowerCase().includes(searchQuery.toLowerCase());

      const priceMatch =
        turf.price >= priceRange[0] && turf.price <= priceRange[1];

      const ratingMatch = rating === "" || turf.rating >= parseFloat(rating);

      return searchMatch && priceMatch && ratingMatch;
    });
  }, [searchQuery, priceRange, rating]);

  const handleTurfSelect = (turfId) => {
    router.push(`/book-turf/${turfId}`);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Filters - Only visible on large screens */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white p-6 sticky top-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                {/* Price Range Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={maxPrice}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>

                {/* Rating Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Minimum Rating</label>
                  <Select value={rating} onValueChange={setRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select minimum rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Results Count */}
                <div className="pt-4">
                  <p className="text-sm text-gray-500 font-medium">
                    {filteredTurfs.length}{" "}
                    {filteredTurfs.length === 1 ? "turf" : "turfs"} found
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:col-span-9">
            {/* Search Bar */}
            <div className="pb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, description, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            {/* Turf Listings */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredTurfs.length > 0 ? (
                filteredTurfs.map((turf) => (
                  <TurfCard
                    key={turf.id}
                    turf={turf}
                    onSelect={() => handleTurfSelect(turf.id)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No turfs found matching your criteria
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
