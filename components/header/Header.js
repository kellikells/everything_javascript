
export default function Header(props) {
    return (
        <div className='text-center font-bold text-lg md:text-4xl uppercase pt-8 pb-4 md:py-14'>
            <h2>{props.questionTitle}</h2>
        </div>
    )
}