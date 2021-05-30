export default function AnswerButton({text, handleClick}) {
    return (
        <button
            onClick={handleClick}
            className='p-4 tracking-widest bg-green-500 text-white rounded-lg hover:bg-green-600 '
        >
            {text}
        </button>
    )
}