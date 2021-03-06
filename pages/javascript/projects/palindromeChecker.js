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

    const ignoreCase = useMemo(() => {
        if (userInput == null) return null;
        // return palindrome(userInput);
        return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
    }, [userInput]);

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
        </div>
    );
}

export default palindromeChecker;

