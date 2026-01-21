import React from "react";
import Menu from "./Menu";
import textoFuturo from "../TEXTO TELA 4.txt?raw";

const Futuro = () => {
  return (
    <div className="app">
      <Menu />
      <section className="text-section">
        <div className="text-title">Futuro</div>
        <div className="text-body">{textoFuturo}</div>
      </section>
    </div>
  );
};

export default Futuro;