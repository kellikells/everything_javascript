export const Input = () => {
    return (
        <>
            <input
                onChange={handleChange}
                value={userInput}
                id='userInput'
                name='userInput'
                type='text'
                placeholder='type here'
                className='p-3 border-gray-500 bg-yellow-100 flex-grow'
            />
        </>

    )
}