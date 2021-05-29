// import '../styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import '../styles/index.css';


function MyApp({ Component, pageProps }) {
  return (

    <div className= 'fontRoboto h-full w-full m-0'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
