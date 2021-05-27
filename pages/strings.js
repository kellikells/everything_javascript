import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
// import Com

const stringQuestions = [
    {
        question: 'Create a function concatenateTwoStrings, that executes as named:',
        answer:'function concatenateTwoStrings(str1, str2) {return str1.concat(str2)}',
    }
]

const strings = (props = stringQuestions) => {

    return (
        <div>
            <Header pageTitle='strings' />

            <div className='mx-auto'>
                <QuestionCard question={stringQuestions[0].question} answer={stringQuestions[0].answer} />

            </div>

        </div>
    );
}

export default strings;
