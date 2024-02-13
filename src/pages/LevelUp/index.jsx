import { SparklesIcon, FaceSmileIcon} from '@heroicons/react/24/solid'
import Layout from "../../components/Layout";

const LevelUp = () => {
  return (
    <Layout>
      <div className="w-3/5 h-3/4 border-4 border-purple-800 shadow-lg shadow-purple-400 bg-purple-200 rounded-3xl p-10 grid place-content-center text-center">
        <div className='flex'>
        <SparklesIcon className="h-20 w-20 text-yellow-500 m-4" />
        <p className="text-purple-800 text-8xl font-medium">¡Correcto!</p>
        <SparklesIcon className="h-12 w-10 text-yellow-500 m-4" />
        </div>
        <p className="text-purple-600 text-4xl my-8 font-bold">Haz avanzado  un nivel.</p>
        <p className="text-purple-500 text-3xl font-bold">¡Y haz ganado un punto!</p>
        <FaceSmileIcon className='h-28 w-28 text-yellow-500 bg-purple-900 rounded-full my-10 m-auto'/>
      </div>
    </Layout>
  );
};

export default LevelUp;
