import React from "react";
import gradient from '../assets/gradient.png';
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
        `url(${gradient})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Frontend Challenge Segurarse</h1>
          <h2 className="mb-5 text-3xl font-bold"> Agustin Romero</h2>
          <p className="mb-5">
            Estoy muy contento por haber participado en este proceso de selección. Aprendi mucho haciendolo.
            Recomiendo leer la documentacion del programa ya que en ella podran encontrar las credenciales permitidas para el logueo del usuario.
          </p>
          <Link to="/init">
            <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
