// import { array } from "prop-types";
import Header from '../components/header/Header';

const arrayQuestions = [
    {
        question: 'Create a function concatenateTwoarrays, that executes as named:',
        answer:
            `function concatenateTwoarrays(str1, str2) {
            return str1.concat(str2);
        }`
    }
]

// function arrays(props = arrayQuestions) {
const arrays = (props = arrayQuestions) => {

    return (
        <div>

        {/* <div className='container'> */}
            <Header pageTitle='arrays' />
            <div>
                {arrayQuestions[0].question}
            </div>

        </div>
    );
}

export default arrays;
