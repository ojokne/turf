import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/star-rating";

export function TurfCard({ turf, onSelect }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={turf.image || "/turf-2.jpeg"}
        alt={turf.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{turf.name}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{turf.location.address}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-primary font-semibold">${turf.price}/hour</span>
          <StarRating rating={turf.rating} totalReviews={turf.totalReviews} />
        </div>
        <Button onClick={onSelect} className="w-full mt-4">
          Book Now
        </Button>
      </div>
    </div>
  );
}