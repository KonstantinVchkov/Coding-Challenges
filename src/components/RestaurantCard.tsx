import { Link } from "react-router-dom";
import { IRestarauntCard } from "../types/types";
import { ROUTES } from "../ROUTES/Routes";
import { calculateAverageRatings } from "../utils/RatingFunction";
import { useState } from "react";

export const RestaurantCard = ({
  card,
  handleToggleFavorite,
}: IRestarauntCard) => {
  const averageRatings = calculateAverageRatings(card.reviewsList);

  const initialIsFavorite = (() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favoriteIds") || "[]");
    return favoriteIds.includes(card.id);
  })();

  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);

  const toggleFavorite = () => {
    const favoriteIds = JSON.parse(localStorage.getItem("favoriteIds") || "[]");

    if (favoriteIds.includes(card.id)) {
      const updatedFavoriteIds = favoriteIds.filter(
        (id: string) => id !== card.id
      );
      localStorage.setItem("favoriteIds", JSON.stringify(updatedFavoriteIds));
    } else {
      favoriteIds.push(card.id);
      localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    }

    setIsFavorite(!isFavorite);

    if (handleToggleFavorite) {
      handleToggleFavorite(card.id);
    }
  };

  return (
    <Link to={`/${ROUTES.restaurantDetail}/${card.id}`} className="CardItem">
      <div className="res" key={card.id}>
        <picture className="image">
          <img src={card.image} alt="" />
          <i
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite();
            }}
            className={`${isFavorite ? "fas" : "far"} fa-heart fa-2x `}
          ></i>
        </picture>
        <div className="text">
          <h3>{card.businessname}</h3>
          <p className="resType">{card.restauranttype}</p>
          <p>
            {averageRatings === 0 ? "" : `Rating: ${averageRatings.toFixed(1)}`}
          </p>
          <p>
            {card.reviewsList.length === 0
              ? ""
              : `Based on: ${card.reviewsList.length} reviews`}
          </p>
        </div>
      </div>
    </Link>
  );
};
