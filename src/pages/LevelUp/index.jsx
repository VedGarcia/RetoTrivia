import { SparklesIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import Layout from "../../components/Layout";

const LevelUp = () => {
  return (
    <Layout>
      <div className="w-3/4 h-3/4 grid gap-6 place-content-center rounded-2xl  bg-purple-200 border-4 border-purple-600 ">
        <div className="flex m-auto">
          <SparklesIcon className="w-24 h-24 text-yellow-600" />
          <p className="text-purple-800 text-6xl font-bold text-center">
            ¡¡Correcto!!
          </p>
          <SparklesIcon className="w-20 h-20 text-yellow-600" />
        </div>
        <FaceSmileIcon className="text-yellow-600 w-36 h-36  bg-purple-800 rounded-full m-auto"/>
        <p className="text-5xl text-center font-semibold text-indigo-800">
          Haz respondido de manera correcta
        </p>
        <p className="text-3xl text-center font-semibold text-indigo-800">Nivel superado</p>
      </div>
    </Layout>
  );
};

export default LevelUp;
