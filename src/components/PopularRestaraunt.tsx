import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { RestaurantCard } from "./RestaurantCard";

const PopularRestaraunt = () => {
  const { data } = useContext(DataContext);
  const sortedRestaurants = data.sort((a, b) => {
    if (b.reviewsList.length - a.reviewsList.length === 0) {
      return b.reviews - a.reviews;
    }
    return b.reviewsList.length - a.reviewsList.length;
  });
  const top10Restaurants = sortedRestaurants.slice(0, 10);
  return (
    <>
      <h2>Our Most Popular Restaurants</h2>
      <div className="flex container">
        {top10Restaurants.map((popCard) => (
          <RestaurantCard card={popCard} key={popCard.id} />
        ))}
      </div>
    </>
  );
};

export default PopularRestaraunt;
