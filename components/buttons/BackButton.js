import { useRouter } from 'next/router'

export default function BackButton() {
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className=' p-3 rounded-lg text-lg text-gray-500 hover:bg-gray-200 ;'
        >
            Click here to go back
        </button>
    )
}