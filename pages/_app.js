import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";
import Context from "../components/context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;
