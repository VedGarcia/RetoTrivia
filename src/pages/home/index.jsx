import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo/index";

const Home = () => {
  return (
    <Layout>
      <Logo width={"2/4"} />
      <Link
        className="w-80 text-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-900 border-solid border-4 border-violet-950 bg-white rounded-full px-4 py-2 m-2 transition-transform  hover:scale-105 hover:shadow-lg hover:border-violet-800 focus:outline-none focus:ring-2"
        to="/question"
      >
        Primaria
      </Link>
      <Link
        className="w-80 text-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-900 border-solid border-4 border-violet-950 bg-white rounded-full px-4 py-2 m-2 transition-transform  hover:scale-105 hover:shadow-lg hover:border-violet-800 focus:outline-none focus:ring-2 "
        to="/question"
      >
        Media
      </Link>
    </Layout>
  );
};

export default Home;
