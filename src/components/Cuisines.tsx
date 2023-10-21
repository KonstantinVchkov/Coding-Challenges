import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { Button } from "./Button";

const Cuisines = () => {
  const { data, setSelectedCuisine } = useContext(DataContext);
  const uniqueRestaurantTypes = Array.from(
    new Set(data.map((item) => item.restauranttype))
  );

  const handleCuisineClick = (btnType: string) => {
    setSelectedCuisine(btnType);
  };

  return (
    <div className="flex cuisine">
      {uniqueRestaurantTypes.map((btnType) => (
        <Button
          type={btnType}
          name={btnType}
          key={btnType}
          onClick={() => handleCuisineClick(btnType)}
        />
      ))}
    </div>
  );
};

export default Cuisines;
