
import Link from 'next/link';

const Home = () => {

  const CATEGORIES_ARR = ['Strings', 'Arrays', 'Objects', 'Methods'];

  return (
    <div className='flex w-1/2 h-full mx-auto md:h-5/6 '>
      <div className='flex flex-col items-center justify-center p-2 gap-y-4 m-auto w-full'>
   


      {/* {CATEGORIES_ARR.map(slug => (
            <Link href='/[slug]' as={`/category/${slug}`} >
              <a className='w-1/2 px-4 py-3 text-center text-4xl font-bold rounded-lg 
              bg-yellow-400 hover:bg-white 
              text-white hover:text-gray-900 
              hover:shadow-xl transition duration-300'>
                {slug}</a>
                </Link>
      ))} */}



        <Link href='/data_types/strings'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Strings</a></Link>

        <Link href='/data_types/arrays'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Arrays</a></Link>


        <Link href='/data_types/objects'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Objects</a></Link>


        <Link href='/data_types/numbers'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Numbers</a></Link>

        </div>
   
    </div>


  );
};

export default Home;
