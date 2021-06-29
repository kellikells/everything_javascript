// ----------------------------------
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import QuestionCard from '../../../../components/cards/QuestionCard';
import NextButton from '../../../../components/buttons/NextButton';
import PreviousButton from '../../../../components/buttons/PreviousButton';
import { stringData, arrayData, methodData, objectData } from '../../../../data/index';

const dataTypes = () => {
    const router = useRouter();
    const queryObj = router.query;
    const dataType = queryObj.slug;

    let dataTypeData = (
        dataType == 'strings'
            ? { stringData }
            : dataType == 'arrays'
                ? { arrayData }
                : dataType == 'methods'
                    ? { methodData }
                    : { objectData }
    )


    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {
        setQuestionNum(questionNum + 1)
    }
    function previousButton() {
        setQuestionNum(questionNum - 1)
    }
    return (
        <div className='flex flex-col h-full md:container mx-auto'>
            <div className='flex-grow'>

                <QuestionCard
                    title={stringData[questionNum].title}
                    functionName={stringData[questionNum].functionName}
                    question={stringData[questionNum].question}
                    answer={stringData[questionNum].answer}
                />
            </div >

            <footer >
                <div className='flex justify-between'>
                    <div className='w-1/5 md:w-32'>
                        <PreviousButton
                            handleClick={previousButton}
                            disabled=
                            {questionNum >= 1
                                ? false
                                : true
                            }
                        />
                    </div>
                    <div className='w-1/5 md:w-32'>
                        <NextButton
                            handleClick={nextButton}
                            disabled=
                            {questionNum <= stringData.length - 1
                                ? false
                                : true
                            }
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default dataTypes;


// --------------------------------------------

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// import QuestionCard from '../../components/cards/QuestionCard';
// import NextButton from '../../components/buttons/NextButton';
// import PreviousButton from '../../components/buttons/PreviousButton';
// import { getData } from '../api/javascript';

// function dataTypes({ dataTypeData }) {
//     const router = useRouter();
//     const queryObj = router.query;
//     const dataType = queryObj.slug;

//     // let dataTypeData = (
//     //     dataType == 'strings'
//     //         ? { stringData }
//     //         : dataType == 'arrays'
//     //             ? { arrayData }
//     //             : dataType == 'methods'
//     //                 ? { methodData }
//     //                 : { objectData }
//     // )

//     console.log(dataTypeData)

//     const [questionNum, setQuestionNum] = useState(0);

//     function nextButton() {
//         setQuestionNum(questionNum + 1)
//     }
//     function previousButton() {
//         setQuestionNum(questionNum - 1)
//     }
//     return (
//         <div className='flex flex-col h-full md:container mx-auto'>
//             <div className='flex-grow'>

//                 {dataType}

//                 <QuestionCard
//                     title={dataTypeData[questionNum].title}
//                     functionName={dataTypeData[questionNum].functionName}
//                     question={dataTypeData[questionNum].question}
//                     answer={dataTypeData[questionNum].answer}
//                 />
//             </div >

//             <footer >
//                 <div className='flex justify-between'>
//                     <div className='w-1/5 md:w-32'>
//                         <PreviousButton
//                             handleClick={previousButton}
//                             disabled=
//                             {questionNum >= 1
//                                 ? false
//                                 : true
//                             }
//                         />
//                     </div>
//                     <div className='w-1/5 md:w-32'>
//                         <NextButton
//                             handleClick={nextButton}
//                             disabled=
//                             {questionNum <= dataTypeData.length - 1
//                                 ? false
//                                 : true
//                             }
//                         />
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }


// dataTypes.getInitialProps = async ({ query }) => {
//     const res = await getData(query.slug);
//     return { dataTypeData: res }
// }

// export default dataTypes;

