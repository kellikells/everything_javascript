import Link from 'next/link';

import MenuItem from '../../components/commons/MenuItem';

const responsiveDesignHome = () => {

    const CATEGORIES_ARR = ['strings', 'arrays', 'objects', 'methods'];

    return (
        <div className='flex w-1/2 h-full mx-auto md:h-5/6 '>
            <div className='flex flex-col items-center justify-center p-2 gap-y-4 m-auto w-full'>

                {CATEGORIES_ARR.map(item => (
                    <MenuItem dir='responsiveDesign' fileName={item} />
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

                {/* <Link href='/projects/palindromeChecker'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Palindrome Checker</a></Link> */}

         

            </div>

        </div>


    );
};

export default responsiveDesignHome;
