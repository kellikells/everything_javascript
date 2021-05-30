// import '../styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (

    <div className= 'fontRoboto m-0 h-screen w-full md:w-2/3 md:mx-auto'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
