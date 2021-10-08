import React from "react";
import styles from "./ArtistList.module.css";
import "../../App.css";

const ArtistList = ({ artists }) => {
  return (
    <div>
      <h2>Artists:</h2>
      <div className="listContainer">
        {artists &&
          artists.map(({ name, id, picture }) => {
            return (
              <li className={styles.artistCard} key={id}>
                <img className={styles.artistPhoto} src={picture} alt={name} />
                <p className={styles.artistName}>{name}</p>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default ArtistList;
