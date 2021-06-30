import React, { useState } from 'react';

// import QuestionCard from '../../components/data_types_cards/QuestionCard';
// import NextButton from '../../components/buttons/NextButton';
// import PreviousButton from '../../components/buttons/PreviousButton';
// import { stringData } from '../../data/index';

const palindromeChecker = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    function handleChange(e) {
        setUserInput(e.target.value);
        ignoreCase(userInput)
    }


    function ignoreCase(str) {
        let arr = str.toLowerCase().split('');
        let reversedArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        }
        let reversedStr = reversedArr.join('');
        if (reversedStr == str.toLowerCase()) {
            setResult('true');
        }
        else {
            setResult('false');
        }
    }


    return (
        <div className=' md:container mx-auto'>
            <label htmlFor='userInput'>Palindrome Checker
                <input
                    onChange={handleChange}
                    value={userInput}
                    id='userInput'
                    name='userInput'
                    type='text'
                    placeholder='type here'
                />
            </label>


            {result == 'true'
                ? <div> true </div>
                : <div> false</div>
            }

        </div>
    );
}

export default palindromeChecker;


