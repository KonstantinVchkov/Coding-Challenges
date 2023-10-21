import React from "react";
import artists from "../data-base/db";
import { ArtistItem } from "./ArtistItem";
import { Link } from "react-router-dom";
import "../assets/ArtistList.css";

export const ArtistList = () => {
  return (
    <div className="ArtistList">
      <h2>Browse the Artists</h2>
      {artists.map((artist) => (
        <Link to={`/artist/${artist.id}`} key={artist.id}>
          <ArtistItem
            {...artist}
            cover={`/images/covers/${artist.cover}.jpg`}
          />
        </Link>
      ))}
    </div>
  );
};
