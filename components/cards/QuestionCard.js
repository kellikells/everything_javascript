import ComponentQuestion from './ComponentQuestion';
import ComponentAnswer from './ComponentAnswer';
import AnswerButton from '../buttons/AnswerButton';

import React, {useState} from 'react';


export default function QuestionCard({question, answer}) {

    const [visible, setVisible] = useState(false);

    function answerButton() {
        setVisible(!visible)
    }

    return (
        <div className='text-center text-xl font-bold tracking-wider'>
            <ComponentQuestion question={question} />
            <AnswerButton handleClick={answerButton} text = 
                {visible
                    ? 'Hide Answer'
                    : 'Reveal Answer'
                }
                />

            {visible
                ? <ComponentAnswer answers={answer} />
                : null
            }
           
        </div>
    );
}


