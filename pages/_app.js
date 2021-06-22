import '@fortawesome/fontawesome-free/css/all.min.css';

// import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/buttons/FooterButtons';
import '../styles/index.css';
import Layout from '../components/commons/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
