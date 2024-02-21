import { FaceFrownIcon } from "@heroicons/react/24/solid";

import Layout from "../../components/Layout";

const GameOver = () => {
  return (
    <Layout>
      <div className="w-3/4 h-3/4 grid gap-6 place-content-center rounded-2xl text-center bg-purple-200 border-4 border-purple-600 ">
        <div className="flex m-auto gap-10">
          <p className="text-purple-800 text-6xl mt-12 font-bold">Oh no...</p>
          <FaceFrownIcon className="w-32 h-32 text-yellow-500 bg-purple-800 rounded-full" />
        </div>
        <p className="text-indigo-800 text-4xl font-semibold">
          ¡¡Puedes intentarlo de nuevo!!
        </p>
        <p className="text-sky-800 text-3xl font-bold">
          ¡Tu puedes! No te rindas...
        </p>
      </div>
    </Layout>
  );
};

export default GameOver;
