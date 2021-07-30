import React, { useState, useEffect } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';

function caesarsCipher() {
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');

    function handleChange(e) {
        setUserInput(e.target.value);
    }
    function handleClick(e) {
        setUserInput('');
    }

    const rot13 = (userInput) => {  
        let arr = userInput.split('');
        let shiftedArr = [];

        // loop through split str, and get charCode + 13
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].match(/[^A-Z]/)) {
                shiftedArr.push(arr[i]);
            } else {
                let numberVal = arr[i].charCodeAt(0);
                if ((numberVal + 13) <= 90) {
                    shiftedArr.push(String.fromCharCode(numberVal + 13));
                }
                else {
                    shiftedArr.push(String.fromCharCode(numberVal - 13));
                }
            }
        }
        let result = shiftedArr.join('');
        setOutput(result);
    }

    useEffect(() => {
        rot13(userInput);
    })

    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title="Caesar's Cipher" />

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
                Caesar's Cipher:<strong>
                    {userInput == 'type here' || userInput.length == 0
                        ? null
                        : output
                    }
                </strong>
            </div>
        </div>
    );
}
export default caesarsCipher;

