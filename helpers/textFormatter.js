// export function textFormatter(fileName) {
exports.textFormatter = (fileName) => {
    if (fileName === null) return undefined;
    if (fileName == 'javascript') return 'JavaScript';

    const originalLetters = fileName.split('');
    const lowerCaseLetters = fileName.toLowerCase().split('');
    let partialFix = fileName.slice(0, 1).toUpperCase() + fileName.slice(1).toLowerCase();
    let wordBreaks = [];

    originalLetters.forEach((letter, index) => {
        if (letter != lowerCaseLetters[index]) wordBreaks.push(index);
    });

    if ((wordBreaks.length == 0) || (wordBreaks.length == 1 && wordBreaks[0] == 0)) {
        return partialFix;
    }

    for (let i = wordBreaks.length - 1; i >= 0; i--) {
        originalLetters.splice(wordBreaks[i], 0, ' ')
    }
    originalLetters[0] = originalLetters[0].toUpperCase();

    return originalLetters.join('')
}


