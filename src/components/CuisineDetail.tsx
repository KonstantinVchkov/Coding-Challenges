import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { RestaurantCard } from "./RestaurantCard";

const CuisineDetail = () => {
  const { data, selectedCuisine } = useContext(DataContext);

  const filteredData = data.filter(
    (item) => !selectedCuisine || item.restauranttype === selectedCuisine
  );
  return (
    <div className="cuisine-detail">
      {filteredData.map((resCard) => (
        <RestaurantCard card={resCard} key={resCard.id} />
      ))}
    </div>
  );
};

export default CuisineDetail;
