import Link from 'next/link';

import { textFormatter } from '../../helpers/textFormatter';

// dir = directory
// fileName = (formatted exactly like the actual file)
export default function MenuItem({ pathname, dir, fileName}) {

    // let formattedText = textFormatter({ fileName })
    return (
        <Link key={fileName}
            href={
                pathname != 'null'
                    ? `${pathname}/${dir}/${fileName}`
                    : dir == 'null'
                        ? `/${fileName}`
                        : `/${dir}/${fileName}`}
        >
            <a className='
            px-4 py-3
            rounded-lg
            text-center
            text-xl md:text-4xl
            w-full md:w-1/2
            font-bold
            bg-green-400 hover:bg-white
            text-white hover:text-gray-900
            hover:shadow-xl transition duration-300'>
                {textFormatter(fileName)}
            </a>
        </Link>
    )
}