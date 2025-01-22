import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../styles/App.css";
import { card } from "../components/card";
import personas from "./data.json";

function App() {
  console.log(personas["pedro"]["100"]["pregunta"]); // utilizo ["ejemplo"] para el valor de la propiedad dl json
  const [puntaje, setPuntaje] = useState(0);
  const [pregunta, setPregunta] = useState(""); // Lo pongo entre comillas y vacio para que sepa el useState que voy a utilizar un string
  const [respuesta, setRespuesta] = useState(""); // useState me permite cambiar valores (voy a crear una variable a la cual le voy a cambiar un valor)
  const [modal, setModal] = useState(false); //Izquierda variable, derecha funcion. usestate inicializa//
  const [puntajeactivo, setPuntajeactivo] = useState(0); // va a empezar desde el valor que le pongamos()//
  const puntajes = [100, 200, 300, 400, 500];
  const [revelar, setRevelar] = useState(false);

  return (
    <>
      <div class="padre">
        {Object.keys(personas).map((nombre) => {
          return (
            <div class="columna">
              {nombre}
              {puntajes.map((valor) => (
                <div
                  class="tarjeta"
                  onClick={() => {
                    setModal(true);
                    setPregunta(personas[nombre][valor]["pregunta"]);
                    setRespuesta(personas[nombre][valor]["respuesta"]);
                    setPuntajeactivo(valor);
                  }}
                >
                  {card(valor)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className={`modal ${modal && "modal-visible"}`}>
        <button
          onClick={() => {
            setModal(false);
            setRevelar(false);
          }}
        >
          cerrar modal
        </button>
        <p>{pregunta}</p>
        <button onClick={() => setRevelar(true)}>revelar</button>
        {revelar && <p>{respuesta}</p>}
      </div>
      <div className="puntaje">
        <h2>puntaje</h2>
        <p>{puntaje}</p>
        <button onClick={() => setPuntaje(puntaje - puntajeactivo)}>
          restar puntaje
        </button>
        <button onClick={() => setPuntaje(puntaje + puntajeactivo)}>
          sumar puntaje
        </button>
      </div>
    </>
  );
}

export default App;
