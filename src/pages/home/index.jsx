import Layout from "../../components/Layout";
import Logo from "../../components/Logo/index";
import Button from "../../components/Button/index";

const Home = () => {
  return (
    <Layout>
      <Logo />
      <Button>Jugar</Button>
      <Button>Opciones</Button>
      <Button>Instrucciones</Button>
    </Layout>
  );
};

export default Home;
