import { useEffect, useState } from "react";
import ArtistList from "./components/ArtistList/ArtistList";
import Logo from "./components/Logo/logo";
import DeezerService from "./services/DeezerService";
import "./App.css";
import AlbumList from "./components/AlbumList/AlbumList";

function App() {
  const [artist, setArtist] = useState([]);
  const [album, setAlbum] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  const getArtist = (searchValue) => {
    DeezerService.getArtist(searchValue)
      .then((artist) => {
        setArtist(artist.data);
        console.log(artist.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAlbum = (searchValue) => {
    DeezerService.getAlbum(searchValue)
      .then((album) => {
        setAlbum(album.data);
        console.log(album.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArtist(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getAlbum(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Logo />
      <input
        type="text"
        id="searchInput"
        placeholder="Search Artist"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      {artist.length === 0 || album.length === 0 ? (
        <div>Nada</div>
      ) : (
        <div>
          <ArtistList className="listContainer" artists={artist.data} />
          <AlbumList className="listContainer" albums={album.data} />
        </div>
      )}
    </div>
  );
}

export default App;
