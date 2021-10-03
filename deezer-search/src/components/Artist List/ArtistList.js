import React from "react";

const ArtistList = ({ artist }) => {
  return (
    <div>
      <ul>
        {artist.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
