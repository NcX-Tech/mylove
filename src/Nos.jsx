import React from "react";
import Menu from "./Menu";
import textoNos from "../TEXTO TELA 3.txt?raw";

const Nos = () => {
  return (
    <div className="app">
      <Menu />
      <section className="text-section">
        <div className="text-title">Nós</div>
        <div className="text-body">{textoNos}</div>
      </section>
    </div>
  );
};

export default Nos;