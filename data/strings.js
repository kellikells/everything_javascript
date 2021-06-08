export const stringData = [
    {
        title: 'Connect strings',
        functionName: 'concatenateStrings(str1, str2)',
        question: 'takes its parameters and returns one string',
        answer: `
            return str1.concat(str2);
        `,
    },
    {
        title: 'Uppercase first letter',
        functionName: 'upperFirst(str)',
        question: 'takes a string and makes the first letter uppercase',
        answer: `
            let upperStr = str.charAt(0).toUpperCase() + str.slice(1);
            return upperStr;
        `,
    },
    {
        title: 'Max length',
        functionName: 'truncateString(str, maxLength)',
        question: 'checks the length of <str> and if it is more than <maxLength> it replaces the end of <str> with elipsis "…" to result in equal length as <maxLength>' ,
        answer: `
            let x = "…";
            if (str.length > maxLength) {
                return(str.slice(0, maxLength - 1) + x);
            }
        `,
    },
    {
        title: 'Get the number',
        functionName: 'extractCurrencyValue(str)',
        question: 'is given a <str> in dollar form, where $ comes first, followed by the numeric value, such as "$150", but returns just the number',
        answer: `
            let currVal = +str.slice(1);
            return currVal;
        `,
    },
]