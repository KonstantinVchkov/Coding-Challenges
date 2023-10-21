import { useParams } from "react-router-dom";
import artists from "../data-base/db";

export const AlbumPage = () => {
    const { id, albumId } = useParams<{ id: string, albumId: string }>();
    const artistDetail = artists.find((artist) => artist.id.toString() === id);
    
    const specificAlbum = artistDetail?.albums.find(album => album.albumId === albumId);

    if (!specificAlbum) {
        return <div>Album not found</div>;
    }

    return (
      <div className="AlbumDetail-Page">
        <img
          src={`/images/albums/${specificAlbum.cover}.jpg`}
          alt={`Cover for album ${specificAlbum.title}`}
        />
        <h2>Title: {specificAlbum.title}</h2>
        <p>Name: {specificAlbum.title}</p> 
        <p>Price: {specificAlbum.price}</p>
      </div>
    );
};
