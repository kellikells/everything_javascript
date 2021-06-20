
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex w-1/2 h-full mx-auto md:h-5/6 '>
      <div className='flex flex-col items-center justify-center p-2 gap-y-4 m-auto w-full'>
        {/* <div className='flex flex-col items-center justify-center p-2 gap-y-4'> */}

       
        <Link href='/strings'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Strings</a></Link>

        <Link href='/arrays'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Arrays</a></Link>


        <Link href='/objects'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Objects</a></Link>


        <Link href='/methods'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Methods</a></Link>

        </div>
      {/* </div> */}
    </div>


  );
};

export default Home;
