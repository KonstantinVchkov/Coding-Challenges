import { ArtistDetailProps } from "../types/types";
export const ArtistDetail = ({
  id,
  name,
  cover,
  bio,
}: ArtistDetailProps) => {
  return (
    <div className="ArtistDetail-Item" id={`${id}`}>
      <img src={cover} alt="" />
      <span className="title-name">{name}</span>
      <p className="biography">{bio}</p>
    </div>
  );
};
