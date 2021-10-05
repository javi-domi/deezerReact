import React from "react";

const ArtistList = ({ artists }) => {
  return (
    <div>
      {artists &&
        artists.map(({ name, id, picture }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <img src={picture} alt={name} />
            </li>
          );
        })}
    </div>
  );
};

export default ArtistList;
