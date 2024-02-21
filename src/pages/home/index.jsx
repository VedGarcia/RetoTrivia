import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo/index";

const Home = () => {
  return (
    <Layout>
      <Logo width={"2/4"} />
      <Link
        className="w-80 text-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-500 border-solid border-4 bg-white rounded-full px-4 py-1 m-2"
        to="/question"
      >
        Primaria
      </Link>
      <Link
        className="w-80 text-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-500 border-solid border-4 bg-white rounded-full px-4 py-1 m-2"
        to="/question"
      >
        Media
      </Link>
    </Layout>
  );
};

export default Home;
