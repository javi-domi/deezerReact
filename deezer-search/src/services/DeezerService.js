import http from "../http-common.js";

const getArtist = (artist) => {
  return http.get(`/artist/${artist}`);
};
const getAlbum = (album) => {
  return http.get(`/album/${album}`);
};

// eslint-disable-next-line
export default { getArtist, getAlbum };
