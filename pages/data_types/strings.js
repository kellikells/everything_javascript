import React, { useState } from 'react';

import QuestionCard from '../../components/cards/QuestionCard';
import NextButton from '../../components/buttons/NextButton';
import PreviousButton from '../../components/buttons/PreviousButton';
import { stringData } from '../../data/index';

const strings = () => {
    const [questionNum, setQuestionNum] = useState(0);
    function nextButton() {
        setQuestionNum(questionNum + 1)
    }
    function previousButton() {
        setQuestionNum(questionNum - 1)
    }
    return (
        <div className='flex flex-col h-full md:container mx-auto'>
            <div className='flex-grow'>
                <QuestionCard
                    title={stringData[questionNum].title}
                    functionName={stringData[questionNum].functionName}
                    question={stringData[questionNum].question}
                    answer={stringData[questionNum].answer}
                />
            </div >

            <footer >
                <div className='flex justify-between'>
                    <div className='w-1/5'>
                        <PreviousButton
                            handleClick={previousButton}
                            disabled=
                            {questionNum >= 1
                                ? false
                                : true
                            }
                        />
                    </div>
                    <div className='w-1/5'>
                        <NextButton
                            handleClick={nextButton}
                            disabled=
                            {questionNum <= stringData.length - 1
                                ? false
                                : true
                            }
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default strings;


