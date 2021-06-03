import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (

    // <div className='fontRoboto w-full flex flex-col min-h-screen mx-auto'>
    //   <Navbar />
    //   <Component className='flex-grow' {...pageProps} />
    //   <Footer />
    // </div>


    <div className='fontRoboto m-0 min-h-screen w-full flex flex-col md:mx-auto'>
      <Navbar />
      <div className='md:w-2/3 md:mx-auto'>
        <Component {...pageProps} />
      </div>

    </div>
  );
}

export default MyApp
