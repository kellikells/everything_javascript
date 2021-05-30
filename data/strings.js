export const stringData = [
    {
        question: 'Create a function, concatenateStrings, that takes its parameters and returns one string',
        answer: `function concatenateStrings(str1, str2) {
            return str1.concat(str2);
        }`,
    },
    {
        question: 'Create a function, upperFirst, that takes a string and makes the first letter uppercase',
        answer: `function upperFirst(str) {
            let upperStr = str.charAt(0).toUpperCase() + str.slice(1);return upperStr;
        }`,
    }
]