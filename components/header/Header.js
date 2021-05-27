
export default function Header(props) {
    return (
        <div className='text-center font-bold text-2xl uppercase py-14'>
            <h2>{props.pageTitle}</h2>
        </div>
    )
}