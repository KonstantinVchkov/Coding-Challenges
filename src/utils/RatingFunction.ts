import { IReview } from "../types/types";

export function calculateAverageRatings(reviewsList: IReview[]): number {
  const totalRatings = reviewsList.reduce(
    (sum, review) => sum + review.stars,
    0
  );
  const averageRatings = reviewsList.length === 0 ? 0 : totalRatings / reviewsList.length;
  return parseFloat(averageRatings.toFixed(1));
}
