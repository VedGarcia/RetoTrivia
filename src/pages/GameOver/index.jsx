import { FaceFrownIcon } from '@heroicons/react/24/solid'
import Layout from "../../components/Layout";

const GameOver = () => {
  return (
    <Layout>
      <div className="w-3/5 h-3/4 border-4 border-purple-800 shadow-lg shadow-purple-400 bg-purple-200 rounded-3xl p-10 grid place-content-center text-center">
        <div className='flex place-content-center'>

        <p className="text-sky-600 text-8xl font-medium mt-6">Oh no...</p>
        <FaceFrownIcon  className="w-24 h-24 bg-purple-900 rounded-full text-yellow-500 m-6" />
        </div>
        <p className="text-sky-500 text-3xl font-bold">Respuesta incorrecta,</p>
        <p className="text-sky-500 text-3xl font-bold">
        puedes intentarlo de nuevo.
        </p>
        <p className="text-purple-600 text-6xl font-semibold m-6">
          ¡No te rindas, tú puedes!
        </p>
      </div>
    </Layout>
  );
};

export default GameOver;
