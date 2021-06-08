import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/index.css';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (

    // <div className='fontRoboto w-full flex flex-col min-h-screen mx-auto'>
    //   <Navbar />
    //   <Component className='flex-grow' {...pageProps} />
    //   <Footer />
    // </div>


    <div className='fontRoboto m-0 w-full flex flex-col md:mx-auto'>
      {/* <Layout> */}
        <Navbar />
        <div className='md:w-2/3 md:mx-auto'>
           {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </div>
      {/* </Layout> */}
      
    </div>
  );
}

export default MyApp
