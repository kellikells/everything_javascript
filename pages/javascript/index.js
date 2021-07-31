import Link from 'next/link';
import { useRouter } from 'next/router';

import MenuItem from '../../components/commons/MenuItem';
import GenericHeader from '../../components/commons/GenericHeader';

const JavaScriptHome = () => {

    const CATEGORIES_ARR = ['strings', 'arrays', 'objects', 'methods'];

    const router = useRouter();
    const queryObj = router.query;
    // const whatRoute = queryObj.
    // console.log(queryObj.slug)
    const path = router.pathname;

    return (
        <div className='flex w-3/4 h-full mx-auto md:h-5/6 '>
            <div className='flex flex-col items-center justify-center p-2 gap-y-4 m-auto w-full'>

            <GenericHeader title={path.slice(1)}/>

                {CATEGORIES_ARR.map(item => (
                    <MenuItem pathname={path} dir='dataTypes' fileName={item} key={item} />
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

           

                <Link href='/javascript/projects/palindromeChecker'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Palindrome Checker</a></Link>


                <Link href='/javascript/projects/romanNumeralConverter'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Roman Numeral Converter</a></Link>
           
           
                <Link href='/javascript/projects/cashRegister'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Cash Register</a></Link>

                {/* <Link href='/javascript/converters'><a className='w-1/2 px-4 py-3 text-center bg-red-700 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>ALL converters</a></Link> */}

          
            </div>

        </div>


    );
};

export default JavaScriptHome;
