import { ArtistDetail } from "./ArtistDetailPage";
import artists from "../data-base/db";
import { useParams } from "react-router-dom";
import { AlbumList } from "./AlbumsList"; // import AlbumList component
import "../assets/ArtistPage.css";

export const ArtistPage = () => {
  const { id } = useParams<{ id: string }>();

  const artistDetail = artists.find((artist) => artist.id.toString() === id);
  if (!artistDetail) {
    return <div>Artist not found</div>;
  }

  return (
    <>
      <ArtistDetail
        cover={`/images/covers/${artistDetail.cover}.jpg`}
        id={artistDetail.id}
        name={artistDetail.name}
        bio={artistDetail.bio}
      />
      <AlbumList albums={artistDetail.albums} artistId={artistDetail.id} />
    </>
  );
};
