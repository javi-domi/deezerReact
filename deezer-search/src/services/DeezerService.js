/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "https://api.deezer.com";

const getArtist = (artist) => {
  return axios.get(`${baseUrl}/search/artist/?q=${artist}`);
};

export default { getArtist };
