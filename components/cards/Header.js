
export default function Header(props) {
    return (
        <div className='text-center font-bold text-lg md:text-2xl uppercase pt-8 pb-4 md:py-14'>
            <h3>{props.questionTitle}</h3>
        </div>
    )
}