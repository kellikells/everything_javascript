import React, { useState } from 'react';

import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

export default function FooterButtons() {
    

    return (
        <footer>
            <NextButton />
            <PreviousButton/>
        </footer>
    )
}