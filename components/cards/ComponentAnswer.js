export default function ComponentAnswer(props) {
    return (
        <ul className='text-xl'>
            <li className='p-10'>{props.answers}</li>
        </ul>
    )
}