import { useEffect, useState } from "react";
import ArtistList from "./components/Artist List/ArtistList";
import DeezerService from "./services/DeezerService";

function App() {
  const [artist, setArtist] = useState([]);
  const [searchName, setSearchName] = useState("");

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <input
        type="text"
        placeholder="Search Artist"
        value={searchName}
        onChange={onChangeSearchName}
      />
      <input type="button" onClick={getArtist} />
      <ArtistList artists={artist.data} />
    </div>
  );
}

export default App;
