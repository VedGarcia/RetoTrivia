import Layout from "../../components/Layout";

const LevelUp = () => {
  return (
    <Layout>
      <div className="w-10/12 h-60 grid gap-6 place-content-center rounded-2xl  bg-purple-200 border-4 border-purple-600 ">
        <p className="text-purple-800 text-6xl font-bold text-center">LevelUp</p>
        <p className="text-xl text-center text-indigo-800">Haz respondido de manera correcta</p>
      </div>
    </Layout>
  );
};

export default LevelUp;
