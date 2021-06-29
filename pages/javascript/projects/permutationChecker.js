// check if something is a palindrome permutation (assume everything is UPPERCASE)

// 1- split str into an array
// 2- go through each character and get the count of each letter
// 3- go through each property {letter:count, } and check if odd # of occurrences


function permutationCheck(str) {

    let letterArr = str.split('');
    let countObj = {};

    for (let i = 0; i < letterArr.length; i++) {
        if (countObj[letterArr[i]]) {
            countObj[letterArr[i]]++;
        } else {
            countObj[letterArr[i]] = 1;
        }
    }

    let count = 0;
    for (let key in countObj) {
        if (countObj[key] % 2 != 0) {
            count++;
        }
        if (count > 1) return false;
    }
    return true;
}

console.log(permutationCheck('OMM'));   //true
console.log(permutationCheck('OMMO'));  //true
console.log(permutationCheck('OMMOER'));    //false
