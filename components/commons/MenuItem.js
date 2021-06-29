import Link from 'next/link';

import { textFormatter } from '../../helpers/textFormatter';

// dir = directory
// fileName = (formatted exactly like the actual file)
export default function MenuItem({ dir, fileName }) {

    // let formattedText = textFormatter({ fileName })
    return (
        <Link
            href={
                dir == 'null'
                    ? `/${fileName}`
                    :`/${dir}/${fileName}`}
        >
            <a className='w-1/2 px-4 py-3 text-center bg-green-400 text-4xl hover:bg-white font-bold text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300'>
                {textFormatter(fileName)}
            </a>
        </Link>
    )
}