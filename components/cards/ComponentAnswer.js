export default function ComponentAnswer({ functionName, answer }) {
    let openCurlyBrace = '{';
    let closeCurlyBrace = '}';

    return (
        <div className='max-w-max mx-auto text-xl space-y-2'>
            <div>function <span>{functionName}</span> {openCurlyBrace}</div>
            <div className='p-2 bg-yellow-200'>{answer}</div>
            <div>{closeCurlyBrace}</div>
        </div>
    )
}
