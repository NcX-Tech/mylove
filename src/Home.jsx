import React, { useMemo } from "react";
import Menu from "./Menu";
import foto1 from "../FOTO TELA 1.jpg";
import foto2 from "../FOTO TELA 2.jpg";
import foto3 from "../FOTO TELA 3.jpg";
import foto4 from "../FOTO TELA 4.jpg";
import textoCapa from "../TEXTO TELA 1.txt?raw";

const Home = () => {
  const textoTela1 = useMemo(() => textoCapa.split(/\r?\n/).filter(Boolean), []);

  return (
    <div className="app">
      <Menu />
      <section className="hero">
        <div className="hero-title">Aqui você vai entender o por que eu te amo</div>
        <div className="hero-grid">
          <div className="hero-img" style={{ backgroundImage: `url(${foto1})` }}></div>
          <div className="hero-img" style={{ backgroundImage: `url(${foto2})` }}></div>
          <div className="hero-img" style={{ backgroundImage: `url(${foto3})` }}></div>
          <div className="hero-img" style={{ backgroundImage: `url(${foto4})` }}></div>
          <div className="hero-overlay-text">
            {textoTela1.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;