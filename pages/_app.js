// import '../styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (
    // <div className='container mx-auto'>
    // <div className=' mx-auto'>
    <div className= 'fontRoboto h-full w-full m-0'>
    {/* <div className= 'fontRoboto px-2 '> */}
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
