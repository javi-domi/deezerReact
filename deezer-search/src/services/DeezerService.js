import http from "../http-common.js";

const getArtist = (artist) => {
  return http.get(`/artist/${artist}`);
};
const getAlbum = (album) => {
  return http.get(`/album/${album}`);
};
const getTrack = (track) => {
  return http.get(`/track/${track}`);
};

// eslint-disable-next-line
export default { getArtist, getAlbum, getTrack };
