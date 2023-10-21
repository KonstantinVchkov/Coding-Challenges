import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { RestaurantCard } from "./RestaurantCard";
const AllRestaurants = () => {
  const { data } = useContext(DataContext);
  return (
    <>
      <h2>All Restaurants</h2>
      <div className="All-Restaurants flex ">
        {data.map((card) => {
          return <RestaurantCard  key={card.id} card={card} />;
        })}
      </div>
    </>
  );
};

export default AllRestaurants;
