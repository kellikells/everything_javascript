// import { string } from "prop-types";
import Header from '../components/header/Header';

const objectQuestions = [
    {
        question: 'Create a function concatenateTwoStrings, that executes as named:',
        answer:
            `function concatenateTwoStrings(str1, str2) {
            return str1.concat(str2);
        }`
    }
]

// function strings(props = stringQuestions) {
const objects = (props = objectQuestions) => {

    return (
        <div>

        {/* <div className='container'> */}
            <Header pageTitle='objects' />
            <div>
                {objectQuestions[0].question}
            </div>

        </div>
    );
}

export default objects;
