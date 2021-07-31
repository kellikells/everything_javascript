export const InputSection = ({userInput, labelText, handleChange, placeholder, column }) => {
    return (
        <section className={
            column == 'yes'
                ? 'flex flex-col'
                : 'flex flex-row'
        }>
            <label for={userInput}>{labelText} </label>
            <input
                // onChange={}
                onChange={handleChange}
                value={userInput}
                id={userInput}
                name={userInput}
                type='text'
                placeholder={placeholder}
                className='p-3 border-gray-500 bg-green-100 flex-grow'
            /> 
        </section>

    )
}