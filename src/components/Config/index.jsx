import { CogIcon } from "@heroicons/react/24/solid";

const Configuration = ({ state, setState }) => {
  return (
    <>
      {state && (
        <div className="w-1/4 h-2/4 overflow-hidden rounded-xl fixed top-3 right-24 bg-purple-950 shadow-md  shadow-sky-200">
          <div className=" bg-purple-950  scroll-p-4 text-white p-12 mb-10  ">
            <CogIcon onClick={() => setState(!state)} className="w-8 h-8 absolute top-6 right-8 cursor-pointer" />
            <h2 className="font-bold select-none text-2xl mb-8">Configuración</h2>
            {/* Aquí puedes agregar los elementos de configuración */}
            <ul>
              <li className="select-none text-lg mb-10 ">
                Opción 1: Configuración de sonido
              </li>
              <li className="select-none text-lg mb-10">
                Opción 2: Configuración de dificultad
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