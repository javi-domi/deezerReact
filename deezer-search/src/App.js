import { useEffect, useState } from "react";
import ArtistList from "./components/ArtistList/ArtistList";
import Logo from "./components/Logo/logo";
import DeezerService from "./services/DeezerService";
import "./App.css";

function App() {
  const [artist, setArtist] = useState([]);
  const [searchName, setSearchName] = useState("");

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const getArtist = (searchName) => {
    DeezerService.getArtist(searchName)
      .then((response) => {
        setArtist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArtist(searchName);
  }, [searchName]);

  return (
    <div className="App">
      <Logo />
      <input
        type="text"
        id="searchInput"
        placeholder="Search Artist"
        value={searchName}
        onChange={onChangeSearchName}
      />
      {artist.length === 0 ? (
        <div>Nada</div>
      ) : (
        <ArtistList artists={artist.data} />
      )}
      {artist.total === 0 && <div>Nothing found</div>}
    </div>
  );
}

export default App;
