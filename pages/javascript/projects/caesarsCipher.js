import React, { useState, useMemo } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';

function palindromeChecker() {
    const [userInput, setUserInput] = useState('');

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function handleClick(e) {
        setUserInput('');
    }

    // const ignoreCase = useMemo(() => {
    //     if (userInput == null) return null;
    //     return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
    // }, [userInput]);



    const rot13 = (str) => {
        let arr = str.split('');
        // console.log(arr)
        let shiftedArr = [];

        // loop through split str, and get charCode + 13
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].match(/[^A-Z]/)) {
                // console.log(`space at index: ${i}`)
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
        return shiftedArr.join('');
    }



    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Palindrome Checker' />

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
                Palindrome, ignoring character case:<strong>
                    {userInput == 'type here' || userInput.length == 0
                        ? null
                        : ignoreCase
                            ? 'Yes'
                            : 'No'}
                </strong>
            </div>

            {/* <BackButton/> */}
        </div>
    );
}

export default palindromeChecker;

console.log(rot13("SERR PBQR PNZC"))// FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))// FREE PIZZA!
console.log(rot13("SERR YBIR?"))// FREE LOVE?