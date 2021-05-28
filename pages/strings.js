import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';

const stringQuestions = [
    {
        question: 'Create a function, concatenateStrings, that takes its parameters and returns one string',
        answer: `function concatenateStrings(str1, str2) {
            return str1.concat(str2);
        }`,
    },
    {
        question: 'Create a function, upperFirst, that takes a string and makes the first letter uppercase',
        answer: `function upperFirst(str) {
            let upperStr = str.charAt(0).toUpperCase() + str.slice(1);return upperStr;
        }`,
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
]



const strings = () => {
    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {

        // no more questions, so start from the beginning
        // if (questionNum >= stringQuestions.length - 1) {
        //     setQuestionNum(questionNum);
        // }
        setQuestionNum(questionNum + 1)
    }
    function previousButton() {

        // already at the first question
        // if (questionNum == 0) {
        //     setQuestionNum(questionNum);
        // }
        setQuestionNum(questionNum -1)
    }

    return (
 
        <div className='fontRoboto h-screen flex justify-between flex-col'>
            <div>
                <Header pageTitle='strings' />

                <div className='mx-auto'>
                    <QuestionCard question={stringQuestions[questionNum].question} answer={stringQuestions[questionNum].answer} />
                </div>
            </div>

            <div>
                <div className='flex justify-between py-4'>
                    <div className='w-1/6 md:w-32'>
                        <PreviousButton handleClick={previousButton} />
                    </div>
                    <div className='w-1/6 md:w-32'>
                        <NextButton handleClick={nextButton} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default strings;
