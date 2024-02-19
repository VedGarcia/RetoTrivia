import { XMarkIcon } from "@heroicons/react/24/solid";

const Information = ({state, setState}) => {
  const info = [
    "Objetivo del juego: El objetivo es responder correctamente a una serie de preguntas de opción múltiple para acumular la mayor cantidad de dinero posible y convertirse en millonario.",
    "Reglas del juego: Los jugadores deben responder correctamente a una serie de preguntas de diferentes niveles de dificultad. Cada pregunta tiene cuatro opciones de respuesta, de las cuales solo una es correcta.",
    "Dinámica del juego: Los jugadores comienzan con una cantidad de dinero base y van acumulando más dinero a medida que responden correctamente a las preguntas. Cada pregunta tiene un valor específico que se suma al total acumulado.",
    "Niveles de dificultad: El juego consta de diferentes niveles de dificultad, con preguntas más difíciles a medida que se avanza en el juego. Al llegar al último nivel, el jugador tiene la oportunidad de ganar el premio mayor y convertirse en millonario.",
    "Fin del juego: El juego termina cuando el jugador responde incorrectamente a una pregunta y pierde todo el dinero acumulado. El jugador puede decidir retirarse en cualquier momento y llevarse el dinero acumulado hasta ese momento.",
  ];
  return (
    <>
    { state &&
    <div className="w-2/4 h-3/4 overflow-hidden rounded-xl absolute  grid place-content-center shadow-md shadow-sky-200">
      <div className="w-full h-full bg-purple-950 scroll-p-4 text-white p-12 overflow-y-scroll">
        <XMarkIcon onClick={()=> setState(!state)} className="w-8 h-8 absolute top-6 right-8 cursor-pointer" />
        <h2 className="font-bold text-2xl mb-8">Instrucciones</h2>
        <ul>
          {info.map((i, index) => (
            <li className="text-lg mb-6" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>}
    </>
  );
};
export default Information;
