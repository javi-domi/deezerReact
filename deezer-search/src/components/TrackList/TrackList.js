import React from "react";
import styles from "./TrackList.module.css";
import "../../App.css";

const TrackList = ({ tracks }) => {
  return (
    <div className="lista">
      <h2>Songs:</h2>
      <div className={styles.songListContainer}>
        {tracks &&
          tracks.map(({ title, id, album, link, preview }) => {
            return (
              <li className={styles.songCard} key={id}>
                <div className={styles.songInfo}>
                  <img
                    className={styles.songPhoto}
                    src={album.cover}
                    alt={title}
                  />
                  <p className={styles.songName}>{title}</p>
                </div>
                <div className={styles.songLinks}>
                  <a className={styles.deezerLink} href={link}>
                    Listen on Deezer
                  </a>
                  <span> |</span>
                  <a className={styles.preview} href={preview}>
                    Preview
                  </a>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default TrackList;
