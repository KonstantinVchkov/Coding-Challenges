import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/dataContext";
import { RestaurantCard } from "./RestaurantCard";

const Favorites = () => {
  const { data } = useContext(DataContext);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const getItem = localStorage.getItem("favoriteIds");
    const storedIds = JSON.parse(getItem || "[]");
    setFavoriteIds(storedIds);
  }, []);

  const removeItem = (cardId: string) => {
    const updatedFavoriteIds = favoriteIds.filter((id) => id !== cardId);
    setFavoriteIds(updatedFavoriteIds);
    localStorage.setItem("favoriteIds", JSON.stringify(updatedFavoriteIds));
  };

  const favItems = data.filter((item) => favoriteIds.includes(item.id));

  return (
    <div className="Favorites">
      {favItems.map((favRes) => (
        <RestaurantCard
          handleToggleFavorite={() => {
            removeItem(favRes.id); 
          }}
          key={favRes.id}
          card={favRes}
        />
      ))}
    </div>
  );
};

export default Favorites;
