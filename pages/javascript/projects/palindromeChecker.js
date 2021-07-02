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




    // function ignoreCase(userInput) {
    //     let arr = userInput.toLowerCase().split('');
    //     let reversedStr = arr.reverse().join('');
    //     // await setResult((reversedStr == userInput.toLowerCase()));
    //     if (reversedStr == userInput.toLowerCase()) {
    //         setResult('True')
    //     } else {
    //         setResult('False')
    //     }
    // }
    const ignoreCase = useMemo(() => {
        if (userInput == null) return null;
        return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
    }, [userInput]);




    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Palindrome Checker' />

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
                </>
                <ClearButton handleClick={handleClick} />
            </section>

            <div className='flex justify-between'>
                Palindrome, ignoring character case:<strong>
                    {ignoreCase == null
                        ? null
                        : ignoreCase
                            ? 'Yes'
                            : 'No'}
                </strong>
            </div>
        </div>
    );
}

export default palindromeChecker;

