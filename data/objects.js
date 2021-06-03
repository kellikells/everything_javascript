export const objectData = [

    {
        title: 'Empty object check' ,
        functionName: 'checkIfEmpty(obj)',
        question: 'checks if an object is empty (eg: let objExample = {})',
        answer: `
            for (let key in obj) {
                return false
            }
            return true;
        `,
    },
    {
        title: 'Sum of values',
        functionName: 'getSum(obj)',
        question: 'adds all of the values together using the <obj> keys',
        answer: `
            let sum = 0;
            for (let key in obj) {
                sum += obj[key];
            }
            return sum;  
        `,
    },
    {
        title: 'Double some' ,
        functionName: 'multiplyNumberValues(obj)' ,
        question: 'multiplies all values of an object <obj> by 2 if it is already of type number',
        answer: `
            for (let key in obj) {
                let value = obj[key];

                typeof value == 'number'
                    ? obj[key] *= 2
                    // ? obj[key] = value * 2
                    : null
            }
        `,
    },
]