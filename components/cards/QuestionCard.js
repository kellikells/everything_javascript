import Header from '../header/Header';
import ComponentQuestion from './ComponentQuestion';
import ComponentAnswer from './ComponentAnswer';
import AnswerButton from '../buttons/AnswerButton';

import React, { useState } from 'react';


export default function QuestionCard({ title, functionName, question, answer }) {

    const [visible, setVisible] = useState(false);

    function answerButton() {
        setVisible(!visible)
    }

    return (
        <>
            <Header questionTitle={title} />
            <div className='text-center text-xl font-bold tracking-wider space-y-8'>
                <ComponentQuestion
                    title={title}
                    functionName={functionName}
                    question={question}
                />



                {visible
                    ? <div><ComponentAnswer functionName={functionName} answer={answer} /></div>
                    : null
                }

                <AnswerButton
                    handleClick={answerButton}
                    text=
                    {visible
                        ? 'Hide Answer'
                        : 'Show Answer'
                    }
                />

            </div>
        </>
    );
}


