import ComponentQuestion from "./ComponentQuestion";
import ComponentAnswer from "./ComponentAnswer";


export default function QuestionCard(props) {
    return (
        <div className='text-center'>

            <ComponentQuestion question = {props.question}/>
            <ComponentAnswer answer = {props.answer}/>
        </div>
    )
}