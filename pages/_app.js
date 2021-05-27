// import '../styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (
    // <div className='container mx-auto'>
    // <div className=' mx-auto'>
    <div className= 'fontRoboto'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
