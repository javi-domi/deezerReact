import { useState } from "react";
import ArtistList from "./components/Artist List/ArtistList";
import DeezerService from "./services/DeezerService";

function App() {
  const [artist, setArtist] = useState([]);
  const [searchName, setSearchName] = useState("");

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const getArtist = () => {
    DeezerService.getArtist(searchName)
      .then((response) => {
        setArtist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Artist"
        value={searchName}
        onChange={onChangeSearchName}
      />
      <input type="button" onClick={getArtist} />
      <ArtistList artist={artist} />
    </div>
  );
}

export default App;
