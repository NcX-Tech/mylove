import React, { useState } from "react";
import Menu from "./Menu";
import namorada from "../FOTO DA NAMORADA.jpg";
import moon from "../LUA SEM FUNDO.png";
import planeta from "../PLANETA TERRA.png";
import spotifyIcon from "../SPOTIFY.png";

const tracks = [
  "https://open.spotify.com/embed/track/4OY4IB4Thqi6XOReCgGEuC?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/2SxTZhTlr10yAO33I4ulyc?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/2qSkIjg1o9h3YT9RAgYN75?utm_source=generator&theme=0"
];

const Player = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const nextTrack = () => setTrackIndex((i) => (i + 1) % tracks.length);
  const prevTrack = () => setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

  return (
    <div className="app">
      <Menu />
      <section className="player-section">
        <div className="player-content">
          <div className="player-left">
            <img src={planeta} alt="Planeta" className="planet" />
            <div className="player-left-text">
              <div className="amo-titulo">TE AMO DAQUI</div>
              <div className="amo-sub">
                <img src={spotifyIcon} alt="Spotify" className="spotify-icon" />
                <span>até a lua</span>
              </div>
            </div>
          </div>
          <img src={moon} alt="Lua" className="moon" />
          <div className="player-card">
            <div className="player-photo">
              <img src={namorada} alt="Foto" />
            </div>
            <div className="player-controls">
              <div className="timeline">
                <div className="dot"></div>
              </div>
              <div className="controls-row">
                <button onClick={prevTrack} aria-label="Música Anterior">
                  Música Anterior
                </button>
                <button onClick={() => window.open(tracks[trackIndex].replace("embed/track", "track"), "_blank")} aria-label="Play" className="play-btn">
                  ▶
                </button>
                <button onClick={nextTrack} aria-label="Próxima Música">
                  Próxima Música
                </button>
              </div>
            </div>
            <div className="hidden-embed">
              <iframe
                src={tracks[trackIndex]}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify player"
              ></iframe>
              <div className="open-spotify">
                <a href={tracks[trackIndex].replace("embed/track", "track")} target="_blank" rel="noreferrer">
                  Abrir no Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Player;