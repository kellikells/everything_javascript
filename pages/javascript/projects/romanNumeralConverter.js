import React, { useState, useEffect } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';

const ROMAN_NUMS_OBJ = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

function romanNumeralConverter() {
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');

    function handleChange(e) {
        setUserInput(e.target.value);
    }
    function handleClick(e) {
        setUserInput('');
    }

    const converter = (userInput) => {
        if (userInput == null) return null;

        let str = '';
        for (let key in ROMAN_NUMS_OBJ) {

            // if 4, 9, 40, 90,400,900
            // these are exceptions
            while (userInput - ROMAN_NUMS_OBJ[key] >= 0) {

                userInput -= ROMAN_NUMS_OBJ[key];
                str += key;
                if (userInput == '0') break;
            }
        }
        setOutput(str);
    };

    useEffect(() => {
        converter(userInput);
    })

    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Roman Numeral Converter' />

            <section className='flex justify-between'>
                <section >
                    <input
                        onChange={handleChange}
                        value={userInput}
                        id='userInput'
                        name='userInput'
                        type='text'
                        placeholder='type here'
                        className='p-3 border-gray-500 bg-yellow-200 flex-grow w-96'
                    />
                </section>
                <ClearButton handleClick={handleClick} />
            </section>

            <div className='flex justify-between mt-7'>
                Roman Numeral Equivalent:<strong>
                    {userInput == 'type here' || userInput.length == 0
                        ? null
                        : output
                    }
                </strong>
            </div>
        </div>
    );
}
export default romanNumeralConverter;

