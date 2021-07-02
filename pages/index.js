import Link from 'next/link';

import MenuItem from '../components/commons/MenuItem';

const Home = () => {

  // this array must match the file names EXACTLY for the /path
  const HOME_MENU = ['javascript', 'responsiveDesign'];

  return (
    <div className='flex w-3/4 h-full mx-auto md:h-5/6 '>
      <div className='flex flex-col items-center justify-center p-2 gap-y-4 m-auto w-full'>
   

        {HOME_MENU.map(item => (
          <MenuItem pathname='null' dir='null' fileName={item} key={item}/>
        ))}

      {/* {CATEGORIES_ARR.map(slug => (
            <Link href='/[slug]' as={`/category/${slug}`} >
              <a className='w-1/2 px-4 py-3 text-center text-4xl font-bold rounded-lg 
              bg-yellow-400 hover:bg-white 
              text-white hover:text-gray-900 
              hover:shadow-xl transition duration-300'>
                {slug}</a>
                </Link>
      ))} */}

        {/* <Link href='/javascript'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>JavaScript</a></Link>

        <Link href='/responsiveDesign'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Responsive Design</a></Link>

     */}

        </div>   
    </div>
  );
};

export default Home;
