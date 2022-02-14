import React from "react";
import "../styles/Banner.css";
import Banner_bg from "../assets/indices.jpg"

function Banner() {
  return (
    <div class="jumbotron p-3 p-md-6 text-white rounded bg-dark">
        <img class="jumbo-bg" src={Banner_bg} alt="bandera" />
        <div class="col-md-6 px-0 jumbo">
          <h1 class="display-4 font-italic">Indice Genealógico</h1>
          <h2>... Uniendo Generaciones</h2>
          <p class="lead my-3">
            El primer paso en genealogía, es conocer a nuestros antepasados.
            Para encontrarlos, Indice Genealógico te ofrece la manera más rápida
            y sencilla de hacerlo.
          </p>
          <p class="lead mb-0">
            <a href="#title" class="text-white font-weight-bold"
              >Compruébalo...</a
            >
          </p>
        </div>
      </div>
  );
}

export default Banner;