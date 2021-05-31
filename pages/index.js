import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/Home.module.css'

// export default function Home() {
const Home = () => {
  return (

    <div>
      <Head>
        <title>Algorithm Questions</title>
        <meta name='description' content='algorithm questions javascript' />
        <link rel='icon' href='/favicon.ico' />
      </Head>



      <div className='h-screen'>

          <div className='h-1/5'></div>
          <div className='flex flex-col items-center justify-center p-2 gap-y-4'>

            <Link href='/strings'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Strings</a></Link>

            <Link href='/arrays'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Arrays</a></Link>

            {/* <div className='flex space-x-8 py-4 justify-center items-center'> */}
            <Link href='/objects'><a className='w-1/2 px-4 py-3 text-center bg-yellow-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Objects</a></Link>


            <Link href='/methods'><a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Methods</a></Link>

            {/* </div> */}

            {/* <div className='flex space-x-8 py-4 pt-16 justify-center items-center'>
          <Link href='/strings'><a className='py-6 w-96 text-center bg-yellow-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Strings</a></Link>
          <Link href='/arrays'><a className='py-6 w-96 text-center bg-green-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Arrays</a></Link>
        </div>

        <div className='flex space-x-8 py-4 justify-center items-center'>
          <Link href='/objects'><a className='py-6 w-96 text-center bg-green-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Objects</a></Link>
          <Link href='/methods'><a className='py-6 w-96 text-center bg-yellow-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Methods</a></Link>
        </div> */}
          </div>
        </div>
 

    </div>

  );
};

export default Home;
