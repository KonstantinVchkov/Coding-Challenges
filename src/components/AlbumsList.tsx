import { Link } from "react-router-dom";
import { IartistAlbums } from "../types/types";
interface AlbumListProps extends IartistAlbums {
    artistId: number;  // artist's ID is of type number based on your types
  }
  export const AlbumList = ({ albums, artistId }: AlbumListProps) => {
    return (
      <div className="Albums">
        {albums.map((album) => (
          <div key={album.albumId} className="Album">
            <Link to={`/artist/${artistId}/${album.albumId}`}>
              <img
                src={`/images/albums/${album.cover}.jpg`}
                alt={`Cover for album ${album.title}`} 
              />
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
