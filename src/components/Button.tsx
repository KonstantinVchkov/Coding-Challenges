import { Link } from "react-router-dom";
import { ROUTES } from "../ROUTES/Routes";

type Props = {
  type: string;
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<Props> = ({ type, name, onClick }) => {
  return (
    <Link className="cuisine" to={ROUTES.cuisineDetail}>
      <button className="btn-orange" onClick={onClick} name={name}>
        {type}
      </button>
    </Link>
  );
};
