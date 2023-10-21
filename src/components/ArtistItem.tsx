import "../assets/ArtistList.css";
import { AitemProps } from "../types/types";

export const ArtistItem = ({ id, name, cover }: AitemProps) => {
  return (
    <div className="ArtistItem" id={`${id}`}>
      <img src={cover} alt="" />
      <span>{name}</span>
    </div>
  );
};
