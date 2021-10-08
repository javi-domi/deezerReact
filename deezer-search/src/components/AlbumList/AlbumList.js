import React from "react";
import styles from "./AlbumList.module.css";
import "../../App.css";

const AlbumList = ({ albums }) => {
  return (
    <div>
      <h2>Albums:</h2>
      <div className="listContainer">
        {albums &&
          albums.map(({ title, id, cover }) => {
            return (
              <li className={styles.albumCard} key={id}>
                <img className={styles.albumPhoto} src={cover} alt={title} />
                <p className={styles.albumName}>{title}</p>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default AlbumList;
