import axios from "axios";

const baseUrl = "https://api.deezer.com";

const getArtist = (req, res) => {
  axios
    .get(`${baseUrl}/search/artist/?q=${req.params.artist}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { getArtist };