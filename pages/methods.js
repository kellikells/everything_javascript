import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';

const methodQuestions = [
    {
        question: 'Create a function concatenateTwomethods, that executes as named:',
        answer:
            `function concatenateTwomethods(str1, str2) {
            return str1.concat(str2);
        }`
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

// function methods(props = methodQuestions) {
const methods = (props = methodQuestions) => {

    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {
        setQuestionNum(questionNum + 1)
    }

    function previousButton() {
        setQuestionNum(questionNum - 1)
    }

    return (

        <div className='fontRoboto h-screen flex justify-between flex-col'>
            <div>
                <Header pageTitle='methods' />

                <div className='mx-auto'>
                    <QuestionCard
                        question={methodQuestions[questionNum].question}
                        answer={methodQuestions[questionNum].answer} />
                </div>
            </div>

            <div>
                <div className='flex justify-between py-4'>
                    <div className='w-1/6 md:w-32'>

                        <PreviousButton
                            handleClick={previousButton}
                            disabled=
                                {questionNum >= 1
                                    ? false
                                    : true
                                }
                        />

                    </div>
                    <div className='w-1/6 md:w-32'>

                        <NextButton
                            handleClick={nextButton}

                            disabled=
                                {questionNum <= methodQuestions.length
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
export default methods;
