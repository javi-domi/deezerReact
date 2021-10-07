import React from "react";
import styles from "./ArtistList.module.css";
import "../../App.css";

const ArtistList = ({ artists }) => {
  return (
    <div className={styles.resultContainer}>
      <h2>Artists:</h2>
      <div className="listContainer">
        {artists &&
          artists.map(({ name, id, picture }) => {
            return (
              <li className="itemCard" key={id}>
                <p className="cardTitle">{name}</p>
                <img src={picture} alt={name} />
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default ArtistList;
