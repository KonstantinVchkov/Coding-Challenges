export interface IartistAlbums {
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  } [];
}

export interface ArtistDetailProps {
  id: number;
  name: string;
  cover: string;
  bio: string;
}

export interface AitemProps {
  id: number;
  name: string;
  cover: string;
}
