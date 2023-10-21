import { Bikecardprops, Sendprops } from "./types";
import "../style/filters.css"

const Filters = ({ sendData, onFilterClick }: Sendprops) => {
  const getCategoryCount = (category: string) => {
    return sendData.filter(
      (product: Bikecardprops) =>
        category === "showAll" ||
        (category === "male" && product.gender === "MALE") ||
        (category === "female" && product.gender === "FEMALE") ||
        (product.brand &&
          product.brand.toLowerCase() === category.toLowerCase())
    ).length;
  };

  const brandCategories = [
    "le grand bikes",
    "kross",
    "explorer",
    "visitor",
    "pony",
    "force",
    "e-bikes",
    "ideal",
  ];
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onFilterClick) {
      onFilterClick(e.currentTarget.id);
    }
  };
  return (
    <div className="fixedNav">
      <h3>Filter by:</h3>
      <li id="showAll" onClick={handleClick}>
        Show all{" "}
        <span data-category="showAll" className="counter">
          {getCategoryCount("showAll")}
        </span>
      </li>
      <div className="line w-15"></div>
      <ul>
        <h3>Gender</h3>
        <li id="male" onClick={handleClick}>
          Male{" "}
          <span data-category="male" className="counter">
            {getCategoryCount("male")}
          </span>
        </li>
        <li id="female" onClick={handleClick}>
          Female{" "}
          <span data-category="female" className="counter">
            {getCategoryCount("female")}
          </span>
        </li>
      </ul>
      <div className="line w-15"></div>
      <ul className="brandS">
        <h3>Brand</h3>
        {brandCategories.map((category) => (
          <li key={category} onClick={handleClick} id={category}>
            {category}{" "}
            <span data-category={category} className="counter">
              {getCategoryCount(category)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
