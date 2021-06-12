export default function PreviousButton({ handleClick, disabled }) {
    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            value='md:Previous'
            className=
            {disabled
                ? 'w-full py-2 md:py-4 bg-gray-300 opacity-25'
                : 'w-full py-2 md:py-4 bg-green-500 text-white text-lg opacity-75 hover:opacity-100'
            }
        >
            <i class="fas fa-arrow-left mr-1"></i>
    
        </button>
    )
}