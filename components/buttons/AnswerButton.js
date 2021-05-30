export default function AnswerButton({text, handleClick}) {
    return (
        <button
            onClick={handleClick}
            className='px-3 py-5 bg-yellow-200 hover:opacity-75 '
        >
            {text}
        </button>
    )
}