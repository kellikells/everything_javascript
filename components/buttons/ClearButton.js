export default function ClearButton({ handleClick }) {
    return (
        <button
            onClick={handleClick}
            className='bg-blue-500 p-3 rounded-lg text-lg text-white hover:bg-blue-700 ;'
        >
            Clear
        </button>
    )
}