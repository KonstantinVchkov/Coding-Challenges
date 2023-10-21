import { Bikecardprops } from "./types";

export const Card = ({name,price,image}:Bikecardprops) => {
  return (
      <div className="card">
            <img src={`./img/${image}.png`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-paragraph">{price}</p>
            </div>
        </div>
  );
};
