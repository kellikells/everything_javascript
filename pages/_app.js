import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from '../components/navbar/Navbar';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (

    <div className= 'fontRoboto m-0 h-screen w-full md:mx-auto'>
      <Navbar />
      <div className='md:w-2/3 md:mx-auto'>
         <Component {...pageProps} />
      </div>
     
    </div>
  );
}

export default MyApp
