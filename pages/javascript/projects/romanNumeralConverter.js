import React, { useState, useMemo } from 'react';

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

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function handleClick(e) {
        setUserInput('');
    }



    const converter = useMemo(() => {
        if (userInput == null) return null;


        let currentTotal = 0;
        let str = '';
        for (let key in ROMAN_NUMS_OBJ) {

            // if 4, 9, 40, 90,400,900
            // these are exceptions
            while (userInput - ROMAN_NUMS_OBJ[key] >= 0) {

                userInput -= ROMAN_NUMS_OBJ[key];
                str += key;

                // if (num == 0) return str;
                // console.log(num);
                if (userInput == '0') break;
            }

            // while ((currentTotal + ROMAN_NUMS_OBJ[key]) <= num) {
            //     currentTotal += ROMAN_NUMS_OBJ[key];
            //     str += key;
            //     console.log(`${key}: ${str}`);
            // }
        }
        return str;

        // return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
    }, [userInput]);




    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Roman Numeral Converter' />

            <section className='flex justify-between'>
                <section>
                    <input
                        onChange={handleChange}
                        value={userInput}
                        id='userInput'
                        name='userInput'
                        type='text'
                        placeholder='type here'
                        className='p-3 border-gray-500 bg-yellow-100 flex-grow'
                    />
                </section>
                <ClearButton handleClick={handleClick} />
            </section>

            <div className='flex justify-between'>
                Roman Numeral equivalent:<strong>
                    {converter == null
                        ? null
                        : converter
                            }
                </strong>
            </div>
        </div>
    );
}

export default romanNumeralConverter;


// function convertToRoman(num) {
//     let currentTotal = 0;
//     let str = '';
//     for (let key in ROMAN_NUMS_OBJ) {

//         // if 4, 9, 40, 90,400,900
//         // these are exceptions
//         while (num - ROMAN_NUMS_OBJ[key] >= 0) {

//             num -= ROMAN_NUMS_OBJ[key];
//             str += key;

//             // if (num == 0) return str;
//             // console.log(num);
//             if (num == 0) break;
//         }

//         // while ((currentTotal + ROMAN_NUMS_OBJ[key]) <= num) {
//         //     currentTotal += ROMAN_NUMS_OBJ[key];
//         //     str += key;
//         //     console.log(`${key}: ${str}`);
//         // }
//     }
//     return str;
// }




// -----------------------------
