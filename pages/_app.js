import '@fortawesome/fontawesome-free/css/all.min.css';

// import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/buttons/FooterButtons';
import '../styles/index.css';
import Layout from '../components/commons/Layout';


function MyApp({ Component, pageProps }) {
  return (

    // <div className='fontRoboto w-full flex flex-col min-h-screen mx-auto'>
    //   <Navbar />
    //   <Component className='flex-grow' {...pageProps} />
    //   <Footer />
    // </div>


    // <div className='fontRoboto m-0 w-full flex flex-col md:mx-auto'>
    //   <div className='md:w-2/3 md:mx-auto'>

    <Layout>
      <Component {...pageProps} />
    </Layout>


  );
}

export default MyApp
