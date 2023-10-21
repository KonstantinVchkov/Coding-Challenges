import { useNavigate } from "react-router-dom";
import { ROUTES } from "../ROUTES/Routes";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

const SurpriseRestaraunt = () => {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const handleSurpriseClick = () => {
    if(data && data.length) {
      const randomRestaurant = data[Math.floor(Math.random() * data.length)]
      navigate(`${ROUTES.surRestaurant}/${randomRestaurant.id}`)
    }
  }

  return (
    <div className="surprise">
      <button className="btn-green" onClick={handleSurpriseClick}>Surprise me</button>
    </div>
  );
};

export default SurpriseRestaraunt;
