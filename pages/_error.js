import Layout from "../components/Layout";

const error = ({ apiError }) => {
  return (
    <Layout>
      <p>
        {apiError
          ? `Something went wrong cause => ${apiError}`
          : "Couldn't find the page sorry"}
      </p>
    </Layout>
  );
};

export default error;
