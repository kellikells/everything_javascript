export default function ComponentAnswer(props) {
    return (
        <ul>
    
            <li>hello</li>
            <li>{props.answers}</li>


            <div className='flex space-x-8 py-4 justify-center items-center'>
                {/* <Link href='/objects'><a className='py-6 w-96 text-center bg-green-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Objects</a></Link>
                <Link href='/methods'><a className='py-6 w-96 text-center bg-yellow-400 text-7xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>Methods</a></Link> */}
            </div>
        </ul>
    )
}