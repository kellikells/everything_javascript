import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import useToggle from '../../hooks/useToggle';
import { textFormatter } from '../../helpers/textFormatter';

export default function Navbar() {
    const [isMobileSize, toggleIsMobileSize] = useToggle(false);
    const [activeLink, setActiveLink] = useState(0);

    const myLinks = ['javascript', 'responsiveDesign'];
    // const myLinks = ['Strings', 'Arrays', 'Objects', 'Methods'];

    // mobile button function 
    function showMobileMenu() {
        //  console.log('clicked');
    }

    return (
        <nav className='bg-red-400 text-white' >
            <div className='px-6'>

                <div className='container flex justify-between md:mx-auto sm:w-full xl:w-4/5'>
                    <div className='flex space-x-4'>

                        {/*  ---------- LOGO ----------  */}
                        <div className='flex items-center py-5 px-2 hover:text-red-700 pl-2 md:pl-0'>
                            {/* <img className='h6 w-6 mr-2' src='/logo.svg' alt='logo' /> */}
                            <Link href='/'>
                                <a onClick={() => setActiveLink(0)}>
                                    Coding Practice
                                </a>
                            </Link>
                        </div>

                    </div>


                    {/*  ---------- Right side: nav ----------  */}


                    <div className='hidden md:flex items-center space-x-1 pr-4 md:pr-0'>
                        {myLinks.map((info, index) => (
                            <Link key={index} href={`/${info}`} >

                                {/* CHANGE TO USE SLUG  */}
                                {/* <Link key={index} href='/[slug]' as={`/dataTypes/${info.toLowerCase()}`} > */}
                                <a
                                    onClick={() => setActiveLink({ info })}
                                    className={
                                        activeLink.info == info
                                            ? 'bg-yellow-100 py-5 px-3 hover:text-red-700'
                                            : ' transition duration-500 ease-in-out py-5 px-3 hover:text-red-700 hover:p-2 hover:bg-gray-100'
                                    }
                                >
                                    {textFormatter(info)}
                                </a>
                            </Link>
                        ))}
                    </div>

                    {/*  ---------- BUTTON: MOBILE MENU ----------  */}
                    <div className='md:hidden flex items-center pr-5'>
                        <button
                            onClick={toggleIsMobileSize}
                            className='mobile-menu-button'
                        >
                            <img className='w-6 h-6' src='/mobile-menu-btn.svg' alt='mobile-menu-button' />
                        </button>
                    </div>
                </div>
            </div>


            {/*  ---------- MOBILE MENU  ----------  */}
            <div className={isMobileSize ? 'mobile-menu md:hidden' : 'hidden mobile-menu md:hidden'}>
                {myLinks.map((info, index) => (
                    <Link key={index} href={`/${info}`}  >
                        <a
                            onClick={() => setActiveLink({ info })}
                            className='block py-2 px-4 text-sm hover:bg-gray-300'
                        >
                            {textFormatter(info)}
                        </a>
                    </Link>
                ))}
            </div>
        </nav >
    );
}



