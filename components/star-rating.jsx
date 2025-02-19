import { Star, StarHalf } from "lucide-react";

export function StarRating({ rating = 0, totalReviews = 0 }) {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(normalizedRating);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {fullStars > 0 &&
          Array.from({ length: fullStars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        {hasHalfStar && (
          <StarHalf className="w-4 h-4 fill-amber-400 text-amber-400" />
        )}
        {emptyStars > 0 &&
          Array.from({ length: emptyStars }).map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />
          ))}
      </div>
      <span className="text-sm text-gray-500">({totalReviews})</span>
    </div>
  );
}
