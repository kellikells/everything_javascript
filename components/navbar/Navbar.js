import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import useToggle from '../../hooks/useToggle';

export default function Navbar() {
    const [isMobileSize, toggleIsMobileSize] = useToggle(false);
    const [activeLink, setActiveLink] = useState(0);

    const myLinks = ['Strings', 'Arrays', 'Objects', 'Methods'];

    // mobile button function 
    function showMobileMenu() {
        // console.log('clicked');
    }

    return (
        <nav className='bg-gray-100'>
            <div className='px-6'>

                <div className='flex justify-between'>
                    <div className='flex space-x-4'>

                        {/*  ---------- LOGO ----------  */}
                        <div className='flex items-center py-5 px-2 hover:text-red-700 pl-2'>
                            {/* <img className='h6 w-6 mr-2' src='/logo.svg' alt='logo' /> */}
                            <Link href='/'><a>JS Algorithm Practice</a></Link>
                        </div>

                        {/*  ---------- Left side: nav ----------  */}
                        {/* <div className='hidden md:flex items-center space-x-1'>
                            <Link href='/'>
                                <a className='py-6 px-3 text-gray-500 hover:text-gray-900'>Home</a>
                            </Link>
                            <Link href='/' >
                                <a className='py-6 px-3 text-gray-500 hover:text-gray-900'>second link</a>
                            </Link>
                        </div> */}

                    </div>

                    {/*  ---------- Right side: nav ----------  */}
                    <div className='hidden md:flex items-center space-x-1 pr-4'>
                        {myLinks.map((info, index) => (
                            <Link key={index} href={`/${info.toLowerCase()}`} >
                                <a
                                    onClick={() => setActiveLink({ info })}
                                    className={
                                        activeLink.info == info
                                            ? 'bg-yellow-100 py-5 px-3 font-semibold hover:text-red-700'
                                            : 'py-5 px-3 font-semibold hover:text-red-700'
                                    }
                                >
                                    {info} 
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
                    <Link key={index} href={`/${info.toLowerCase()}`}  >
                        <a
                            // onClick={toggleIsActive}
                            className='block py-2 px-4 text-sm hover:bg-gray-300'
                        >
                            {info}
                        </a>
                    </Link>
                ))}
            </div>

        </nav >
    );
}



