import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/dataContext";
import AllRestaurants from "./components/AllRestaurants";
import { ROUTES } from "./ROUTES/Routes";
import RestarauntDetail from "./components/RestarauntDetail";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import PopularRestaraunt from "./components/PopularRestaraunt";
import SurpriseRestaraunt from "./components/SurpriseRestaraunt";
import Footer from "./components/Footer";
import  Cuisines  from "./components/Cuisines";
import  CuisineDetail  from "./components/CuisineDetail";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <DataProvider>
        <Routes>
          <Route
            path={ROUTES.homePage}
            element={
              <div className="container">
                <SurpriseRestaraunt />
                <PopularRestaraunt />
                <Cuisines />
                <AllRestaurants />
              </div>
            }
          />
          <Route
            path={`${ROUTES.restaurantDetail}/:id`}
            element={<RestarauntDetail />}
          />
          <Route
            path={`${ROUTES.surRestaurant}/:id`}
            element={<RestarauntDetail />}
          />
          <Route path={ROUTES.cuisineDetail} element={<CuisineDetail />} />
          <Route path={ROUTES.favorites} element={<Favorites />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
