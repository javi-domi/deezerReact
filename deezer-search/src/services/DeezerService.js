import http from "../http-common.js";

const getArtist = (artist) => {
  return http.get(`/api/v1/${artist}`);
};

// eslint-disable-next-line
export default { getArtist };
