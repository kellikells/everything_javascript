import React, { useState, useEffect } from 'react';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';
import Footer from '../components/footer/Footer';

import { methodData } from '../data/index';

const methods = () => {
    const [questionNum, setQuestionNum] = useState(0);
    function nextButton() {
        setQuestionNum(questionNum + 1)
    }
    function previousButton() {
        setQuestionNum(questionNum - 1)
    }
    return (
        <div className='fontRoboto w-full flex flex-col h-screen mx-auto'>
            {/* // <div className='min-h-screen container mx-auto fontRoboto  flex flex-col justify-between'> */}
            {/* // <div className='min-h-screen container mx-auto fontRoboto  flex flex-col justify-between'> */}
            <div className='flex-grow'>
                <QuestionCard
                    title={methodData[questionNum].title}
                    functionName={methodData[questionNum].functionName}
                    question={methodData[questionNum].question}
                    answer={methodData[questionNum].answer}
                />
            </div >
            {/* <Footer />
                </div> */}

            <footer className='container relative mx-auto'>
                <div className='  px-4'>
                    <div className='flex justify-between'>
                        <div className='w-1/5 md:w-32'>

                            <PreviousButton
                                handleClick={previousButton}
                                disabled=
                                {questionNum >= 1
                                    ? false
                                    : true
                                }
                            />

                        </div>
                        <div className='w-1/5 md:w-32'>

                            <NextButton
                                handleClick={nextButton}
                                disabled=
                                {questionNum <= methodData.length - 1
                                    ? false
                                    : true
                                }
                            />

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default methods;
