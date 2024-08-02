import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Information = ({ state, setState }) => {
  const info = [
    "Objetivo del juego: El objetivo es responder correctamente a una serie de preguntas de opción múltiple para acumular la mayor cantidad de dinero posible y convertirse en millonario.",
    "Reglas del juego: Los jugadores deben responder correctamente a una serie de preguntas de diferentes niveles de dificultad. Cada pregunta tiene cuatro opciones de respuesta, de las cuales solo una es correcta.",
    "Dinámica del juego: Los jugadores comienzan con una cantidad de dinero base y van acumulando más dinero a medida que responden correctamente a las preguntas. Cada pregunta tiene un valor específico que se suma al total acumulado.",
    "Niveles de dificultad: El juego consta de diferentes niveles de dificultad, con preguntas más difíciles a medida que se avanza en el juego. Al llegar al último nivel, el jugador tiene la oportunidad de ganar el premio mayor y convertirse en millonario.",
    "Fin del juego: El juego termina cuando el jugador responde incorrectamente a una pregunta y pierde todo el dinero acumulado. El jugador puede decidir retirarse en cualquier momento y llevarse el dinero acumulado hasta ese momento.",
  ];

  if (!state) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-11/12 max-w-4xl bg-gradient-to-br from-purple-900 to-purple-900 text-white rounded-xl relative animate-modal-enter">
        <XMarkIcon 
          onClick={() => setState(false)} 
          className="w-8 h-8 absolute top-4 right-4 cursor-pointer text-white duration-300" 
        />
        <div className="p-8 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center mb-6">
            <InformationCircleIcon className="w-10 h-10 text-white mr-4 animate-pulse"/>
            <h2 className="font-bold text-3xl border-b-2 pb-2">Instrucciones</h2>
          </div>
          <ul className="list-disc pl-6 space-y-4">
            {info.map((i, index) => (
              <li className="text-lg leading-relaxed" key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
