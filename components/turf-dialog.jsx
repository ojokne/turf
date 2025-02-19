import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { StarRating } from "@/components/star-rating";

export function TurfDialog({ turf, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{turf?.name}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-2" />
              <span>
                {turf?.location.address}, {turf?.location.city}
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Image
            src="/turf-2.jpeg"
            alt={turf?.name || "Turf"}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 mb-2">{turf?.description}</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-primary font-semibold mb-2">
              ${turf?.price}/hour
            </p>
            <div className="flex items-center gap-2 mt-1">
              <StarRating
                rating={turf?.rating}
                totalReviews={turf?.totalReviews}
              />
            </div>
          </div>
          <h4 className="font-semibold mb-2">Facilities:</h4>
          <ul className="list-disc list-inside">
            {turf?.facilities.map((facility, index) => (
              <li key={index} className="text-gray-700">
                {facility}
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="outline">
            Close
          </Button>
          <Button variant="default" className="mb-3">
            Book Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}