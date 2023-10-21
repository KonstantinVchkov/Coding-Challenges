import {  createContext, useEffect, useState } from "react";
import { IData, IReview } from "../types/types";
import { calculateAverageRatings } from "../utils/RatingFunction";
interface IDataContext {
  data: IData[];
  addReview: (restaurantId: string, review: IReview) => void;
  selectedCuisine: string | null;
  setSelectedCuisine: React.Dispatch<React.SetStateAction<string | null>>;
}


export const DataContext = createContext({} as IDataContext);

interface Props {
  children: React.ReactNode;
}
export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<IData[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const API_URL = "http://localhost:5001/restaurants";
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Failed fetching data:", error.message));
  }, []);
  const addReview = (restaurantId: string, review: IReview) => {
    const updatedData = data.map((item) => {
      if (item.id !== restaurantId) return item;

      const updatedReviewsList = [...item.reviewsList, review];
      return {
        ...item,
        reviewsList: updatedReviewsList,
        reviews: calculateAverageRatings(updatedReviewsList),
      };
    });
    const updatedRestaurant = updatedData.find(
      (item) => item.id === restaurantId
    );

    if (!updatedRestaurant) return;

    fetch(`${API_URL}/${restaurantId}`, {
      method: "PUT",
      body: JSON.stringify(updatedRestaurant),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => setData(updatedData))
      .catch((error) => console.error("Failed to add review:", error.message));
  };

  return (
    <DataContext.Provider value={{ data, addReview, selectedCuisine, setSelectedCuisine}}>
      {children}
    </DataContext.Provider>
  );
};
