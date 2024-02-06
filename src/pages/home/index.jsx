import { NavLink } from "react-router-dom";
import Layout from  "../../components/Layout";
import Logo from "../../components/Logo/index";

const Home = () => {
  return (
      <Layout>
        <Logo />
      <button className="text-2xl font-bold uppercase text-violet-950 border-solid border bg-white rounded-full px-8 py-1 m-2 ">
        Jugar
      </button>
      <button className="text-2xl font-bold uppercase text-violet-950 border-solid border bg-white rounded-full px-4 py-1 m-2">
        Opciones
      </button>
      </Layout>
  );
};

export default Home;
