import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';

import { stringData } from '../data/index';

// const stringData2 = [
//     {
//         question: 'Create a function, concatenateStrings, that takes its parameters and returns one string',
//         answer: `function concatenateStrings(str1, str2) {
//             return str1.concat(str2);
//         }`,
//     },
//     {
//         question: 'Create a function, upperFirst, that takes a string and makes the first letter uppercase',
//         answer: `function upperFirst(str) {
//             let upperStr = str.charAt(0).toUpperCase() + str.slice(1);return upperStr;
//         }`,
//     },
//     {
//         question: '',
//         answer: '',
//     },
//     {
//         question: '',
//         answer: '',
//     },
//     {
//         question: '',
//         answer: '',
//     },
//     {
//         question: '',
//         answer: '',
//     },
//     {
//         question: '',
//         answer: '',
//     },
// ]



const strings = () => {
    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {
        setQuestionNum(questionNum + 1)
    }

    function previousButton() {
        setQuestionNum(questionNum - 1)
    }

    return (

        <div className='fontRoboto h-5/6 flex justify-between flex-col
         '>
        {/* <div className='fontRoboto h-5/6 flex justify-between flex-col bg-green-100 '> */}
            <div>
                {/* <Header pageTitle='strings' /> */}

                
    
                <div className='mx-auto'>
                    <QuestionCard
                        title={stringData[questionNum].title}
                        functionName={stringData[questionNum].functionName}
                        question={stringData[questionNum].question}
                        answer={stringData[questionNum].answer}
                    />
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <div className='w-1/4 md:w-32'>

                        <PreviousButton
                            handleClick={previousButton}
                            disabled=
                            {questionNum >= 1
                                ? false
                                : true
                            }
                        />

                    </div>
                    <div className='w-1/4 md:w-32'>

                        <NextButton
                            handleClick={nextButton}
                            disabled=
                                {questionNum <= stringData.length-1
                                    ? false
                                    : true
                                }
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default strings;
