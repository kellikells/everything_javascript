// import { method } from "prop-types";
import Header from '../components/header/Header';

const methodQuestions = [
    {
        question: 'Create a function concatenateTwomethods, that executes as named:',
        answer:
            `function concatenateTwomethods(str1, str2) {
            return str1.concat(str2);
        }`
    }
]

// function methods(props = methodQuestions) {
const methods = (props = methodQuestions) => {

    return (
        <div>

        {/* <div className='container'> */}
            <Header pageTitle='methods' />
            <div>
                {methodQuestions[0].question}
            </div>

        </div>
    );
}

export default methods;
