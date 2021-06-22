import React, { useState } from 'react';

import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

export default function FooterButtons() {

    return (

        <footer className=' fixed bottom-0 inset-x-0'>
            {/* <div className='  px-4'> */}
            <div className='flex justify-between'>
                <div className='w-1/5 md:w-32'>

                    <PreviousButton />
                    <NextButton />
                </div>
            </div>
        </footer>
    )
}