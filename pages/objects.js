import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';


const objectQuestions = [
    {
        question: 'Create a function concatenateTwoStrings, that executes as named:',
        answer:
            `function concatenateTwoStrings(str1, str2) {
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
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
]

// function strings(props = stringQuestions) {
const objects = (props = objectQuestions) => {

    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {
        setQuestionNum(questionNum + 1)
    }

    function previousButton() {
        setQuestionNum(questionNum - 1)
    }

    return (

        <div className='fontRoboto h-5/6 flex justify-between flex-col'>
            <div>
                <Header pageTitle='objects' />

                <div className='mx-auto'>
                    <QuestionCard
                        question={objectQuestions[questionNum].question}
                        answer={objectQuestions[questionNum].answer}
                    />
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
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
                                {questionNum <= objectQuestions.length
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

export default objects;
