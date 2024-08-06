import { CogIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import useSound from "use-sound";

const Configuration = ({ state, setState }) => {
  const [sonidoActivado, setSonidoActivado] = useState(() => {
    const storedState = localStorage.getItem("sonidoActivado");
    return storedState === "true";
  });
  const [play, { pause, sound }] = useSound("/public/Sound/ganador.mp3", { loop: sonidoActivado });

  useEffect(() => {
    localStorage.setItem("sonidoActivado", sonidoActivado.toString());
  }, [sonidoActivado]);

  const handleSonido = () => {
    setSonidoActivado(!sonidoActivado);
    if (sonidoActivado) {
      pause();
      sound.currentTime = 0;
    } else {
      play();
    }
  };

  return (
    <>
      {state && (
        <div className="w-1/4 h-2/4 overflow-hidden rounded-xl fixed top-3 right-24 bg-purple-950 shadow-md  shadow-sky-200">
          <div className=" bg-purple-950 text-white p-12 mb-10  ">
            <CogIcon onClick={() => setState(!state)} className="w-8 h-8 absolute top-6 right-8 cursor-pointer" />
            <h2 className="font-bold select-none text-2xl mb-8">Configuración</h2>
            {/* Aquí puedes agregar los elementos de configuración */}
            <ul>
              <li className="select-none text-lg mb-6">
                Opción 1: Configuración de sonido
                <button
                  className={`${
                    sonidoActivado ? "bg-violet-500" : "bg-purple-800"
                  } hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-full font-bold py-2 px-4 my-9`}
                  onClick={handleSonido}
                >
                  {sonidoActivado ? "Desactivar sonido" : "Activar sonido"}
                </button>
              </li>
              {/* Agrega más opciones de configuración aquí */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Configuration;