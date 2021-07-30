import React, { useState, useMemo } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';
// check for valid formats of phone number inputs



// 1 555 555 5555       
// --------------------------------

function phoneNumberFormat() {
    const [userInput, setUserInput] = useState('');

    function handleChange(e) {
        setUserInput(e.target.value);
    }
    function handleClick(e) {
        setUserInput('');
    }

    const phoneFormat = (userInput) => {
        if (userInput == null) return null;
        // the order of the "if" statements MATTERS, it will eliminate specificity 

        // if length is 10 == MUST BE ALL numbers
        if (userInput.length === 10) return (/\d{10}/).test(userInput);    // 5555555555

        let spaces = (/^\d{3}\s\d{3}\s\d{4}/).test(userInput);   // 555 555 5555
        let dashes = (/^\d{3}\-\d{3}\-\d{4}/).test(userInput);  // 555-555-5555
        let parNoSpace = (/^\((\d{3})\)\d{3}-\d{4}/).test(userInput);  // (555)555-5555
        let parWithSpace = (/^\((\d{3})\)\s\d{3}-\d{4}/).test(userInput);   // (555) 555-5555

        let oneSpaces = (/^1\s\d{3}\s\d{3}\s\d{4}/).test(userInput);// 1 555 555 5555
        let oneDashes = (/^1\s\d{3}\-\d{3}\-\d{4}/).test(userInput);// 1 555-555-5555
        let oneParNoSpace = (/^1\(\d{3}\)\d{3}\-\d{4}/).test(userInput);// 1(555)555-5555
        let oneParWithSpace = (/^1\s\(\d{3}\)\s\d{3}\-\d{4}/).test(userInput);// 1 (555) 555-5555
        // return palindrome(userInput);
        return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
    }

    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Phone Number Format' />

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
              Phone Number<strong>
                    {userInput == 'type here' || userInput.length == 0
                        ? null
                        : phoneFormat}
                </strong>
            </div>
        </div>
    );
}

   


// --------------------------------

export default phoneNumberFormat;