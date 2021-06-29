import React, { useState } from 'react';

import QuestionCard from '../../../components/cards/QuestionCard';
import NextButton from '../../../components/buttons/NextButton';
import PreviousButton from '../../../components/buttons/PreviousButton';
import { arrayData } from '../../../data/index';

const arrays = () => {
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
                    title={arrayData[questionNum].title}
                    functionName={arrayData[questionNum].functionName}
                    question={arrayData[questionNum].question}
                    answer={arrayData[questionNum].answer}
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
                            {questionNum <= arrayData.length - 1
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

export default arrays;


