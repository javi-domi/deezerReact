/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "https://api.deezer.com";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const getArtist = (artist) => {
  return axios.get(`${baseUrl}/search/artist/?q=${artist}`, {
    headers: {
      "Access-Control-Allow-Origin": `${baseUrl}`,
    },
  });
};

export default { getArtist };
