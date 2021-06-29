

// export function getData() {
    // return fetch('https://jsonplaceholder.typicode.com/posts')
// }

import { stringData, arrayData, methodData, objectData } from '../../../data/index';

export function getData(slug) {
        // let dataTypeData = (
    //     dataType == 'strings'
    //         ? { stringData }
    //         : dataType == 'arrays'
    //             ? { arrayData }
    //             : dataType == 'methods'
    //                 ? { methodData }
    //                 : { objectData }
    // )

    if (slug == 'strings') return { stringData };
    if (slug == 'arrays') return { arrayData };
    if (slug == 'methods') return { methodData };
    if (slug == 'objects') return { objectData };
    // return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}