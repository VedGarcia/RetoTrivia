import Information from "../../components/Information";
import Layout from "../../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <span className="text-gray-100 text-6xl font-bold">Error 404</span>
      <Information />
    </Layout>
  );
};

export default NotFound;
