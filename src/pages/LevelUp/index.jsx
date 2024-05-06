import { SparklesIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const LevelUp = () => {
  return (
    <Layout>
      <div className="w-3/4 h-3/4 p-8 grid gap-6 place-content-center rounded-2xl bg-purple-200 border-4 border-purple-600 ">
        <div className="flex m-auto">
          <SparklesIcon className="w-20 h-20 text-yellow-600" />
          <p className="text-purple-800 text-5xl font-bold text-center">
            ¡¡Correcto!!
          </p>
          <SparklesIcon className="w-20 h-20 text-yellow-600" />
        </div>
        <FaceSmileIcon className="text-yellow-600 w-36 h-36  bg-purple-800 rounded-full m-auto" />
        <p className="text-4xl text-center font-semibold text-indigo-800">
          Haz respondido de manera correcta
        </p>
        <p className="text-3xl text-center font-semibold text-indigo-800">
          Nivel superado
        </p>
        <Link to={"/question"} className="hover:bg-purple-800 w-3/4 h-16 border-4 m-auto text-center border-purple-900 hover:shadow-xl hover:shadow-violet-500 rounded-full grid place-content-center p-4 text-3xl font-medium text-purple-900 hover:text-white">
          Siquiente pregunta
        </Link>
      </div>
    </Layout>
  );
};

export default LevelUp;
