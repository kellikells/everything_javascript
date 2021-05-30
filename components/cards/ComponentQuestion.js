export default function ComponentQuestion(props) {

    return (

        <div className='max-w-max mx-auto p-10 md:border-solid border-4 py-5 md:py-10 text-sm md:text-xl space-y-4
        text-left
        bg-white
        shadow-2xl'>
        {/* <div className='max-w-max mx-auto p-10 md:border-solid md:border-blue-800 border-4 bg-gray-200 py-5 md:py-10 text-sm md:text-xl space-y-4
        text-left'> */}
            
                <div>
                    Create a function: <span className='text-base md:text-2xl'>{props.functionName}</span>
                </div>
                <div>
                    It: <span className='text-base md:text-2xl'>{props.question}</span>
                </div>

            </div>
    );
}