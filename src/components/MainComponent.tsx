import { useEffect, useState } from "react";
import "../style/main-component.css";
import { Card } from "./Card";
import "../style/card-section.css"
import { Header } from "./Header";
import { Bikecardprops } from "./types";
import Filters from "./Filters";
import Footer from "./Footer";
export const API_URL = "https://challenges.brainster.tech/ajax_data/data.json";

function MainComponent() {
  const [stateProduct, setStateProduct] = useState<Bikecardprops[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Bikecardprops[]>([]);
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setStateProduct(data.products);
        setFilteredProducts(data.products);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleFilterClick = (filterCriteria: string) => {
    let handleFilteredProducts: Bikecardprops[] = [];

    switch (filterCriteria) {
      case "male":
      case "female":
        handleFilteredProducts = stateProduct.filter((product) => product.gender === filterCriteria.toUpperCase());
        break;
      case "showAll":
        handleFilteredProducts = stateProduct;
        break;
      default:
        handleFilteredProducts = stateProduct.filter((product) => product.brand?.toLowerCase() === filterCriteria.toLowerCase());
        break;
    }

    setFilteredProducts(handleFilteredProducts); 
  };

  return (
    <div className="MainComponent w-90">
      <Header />
      <div className="cards-section">
        <Filters sendData={stateProduct} onFilterClick={handleFilterClick} />
        <div className="allCards">
          {filteredProducts.map((product, idx) => (
            <Card
              key={idx}
              image={product.image}
              name={product.name}
              price={product.price}
              gender={product.gender}
              brand={product.brand}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainComponent;
