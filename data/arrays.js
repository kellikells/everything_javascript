export const arrayData = [
    {
        title: 'Filter range',
        functionName: 'filterRange(arr, a, b)',
        question: 'takes an array <arr> and return a new array of elements that are higher or equal to <a> and lower or equal to <b>',
        answer: `
            let filtered = arr.filter(item => item >= a && item <= b);
            return filtered;
        
        `,
    },
    {
        title: 'Copy array',
        functionName: 'copyArray(arr)' ,
        question: 'makes a copy of an array <arr>',
        answer: `
            let arr2 = arr.map(item => item);
            return arr2;
        `,
    },
    {
        title: 'Copy and sort',
        functionName: 'sortedCopy(arr)' ,
        question: 'sorts a copy of an array <arr>',
        answer: `
            let sortedArr = arr.map(item => item);
            sortedArr.sort();
            return sortedArr;
        `,
    },
    {
        title: 'Sort decreasing',
        functionName: 'sortDecreasing(arr)',
        question: 'sorts the array <arr> elements from highest to lowest number',
        answer: `
            arr.sort((a, b) => b - a);
            return arr;
        `,
    },

    // {
    //     title: ,
    //     functionName: ,
    //     question: ,
    //     answer: `
    //         return str1.concat(str2);
    //     `,
    // },
    // {
    //     title: ,
    //     functionName: ,
    //     question: ,
    //     answer: `
    //         return str1.concat(str2);
    //     `,
    // },
    // {
    //     title: ,
    //     functionName: ,
    //     question: ,
    //     answer: `
    //         return str1.concat(str2);
    //     `,
    // },
]