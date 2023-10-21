import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import { ROUTES } from "../ROUTES/Routes";
import "../assets/Homepage.css"
import { ArtistList } from "./ArtistList";
import { ArtistPage } from "./ArtistPage";
import { AlbumPage } from "./AlbumPage";

export default function HomePage() {
  return (
    <div>
      <NavBar image="/images/raw/Girls-Listen-Music_0.jpg" />
      <Routes>
        <Route element={<ArtistList />}  path={ROUTES.home} />
        <Route element={<ArtistPage />}  path={ROUTES.artist} />
        <Route element={<AlbumPage />} path={ROUTES.albumPage}/>
      </Routes>
    </div>
  );
}
