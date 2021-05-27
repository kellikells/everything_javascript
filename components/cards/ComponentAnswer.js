export default function ComponentAnswer(props) {
    return (
        <ul className='text-xl'>
            <li className='border-solid border-gray-300 border-4 p-10'>{props.answers}</li>
        </ul>
    )
}