export default function NextButton({ handleClick, disabled }) {
    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className=
            {disabled
                ? 'w-full py-2 md:py-4 bg-gray-300 opacity-25'
                : 'w-full py-2 md:py-4 bg-green-500 text-white text-lg opacity-75 hover:opacity-100'
            }
        >
            Next 
            <i className="fas fa-arrow-right ml-1"></i>
        </button>
    )
}