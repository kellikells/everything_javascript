export default function NextButton({ handleClick, disabled }) {
    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className=
            {disabled
                ? 'w-full py-5 bg-gray-300 opacity-25'
                : 'w-full py-5 bg-blue-300 hover:opacity-75'
            }
        >
            Next
        </button>
    )
}