import React, { useState } from 'react';

import QuestionCard from '../../../components/cards/QuestionCard';
import NextButton from '../../../components/buttons/NextButton';
import PreviousButton from '../../../components/buttons/PreviousButton';
import { methodData } from '../../../data/index';

const methods = () => {
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
                    title={methodData[questionNum].title}
                    functionName={methodData[questionNum].functionName}
                    question={methodData[questionNum].question}
                    answer={methodData[questionNum].answer}
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
                            {questionNum <= methodData.length - 1
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

export default methods;


