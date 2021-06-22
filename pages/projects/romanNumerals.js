// I = 1;
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

//  I   V   X     L      C      D      M
//  1   5   10    50    100    500    1000

// 1-3, 4-8, 9-13

// if the length of 'whatever' is greater than 3, switch to ... 

// const romanNums = {
//     I: 1,
//     V: 5,
//     X: 10,
// }

let I = [1, 'I'];

let V = [5, 'V'];
let X = [10, 'X'];
let L = [50, 'L'];
let C = [100, 'C'];
let D = [500, 'D'];
let M = [1000, 'M'];

romanArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
numsArr = [1000, 500, 100, 50, 10, 5, 1];




// -----------------------------
let letter = romanArr[0]

// const RN_OBJ = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }
const RN_OBJ = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

function convertToRoman(num) {
    let currentTotal = 0;
    let str = '';
    for (let key in RN_OBJ) {


        // if(RN_OBJ[key] <= num) {
        while ((currentTotal + RN_OBJ[key]) <= num) {
            currentTotal += RN_OBJ[key];

            // check if the new currentTotal needs to be formatted
            // check: units, tens, hundreds, thousands
            // 4 or 9 ? then format, and break to the (for...in)

            let stringTotal = String(currentTotal);
            


            str += key;
            // console.log(str)
            // console.log(`${key} : ${RN_OBJ[key]}`);

        }
        // return str
    }
    return str;
}




// -----------------------------


// console.log(convertToRoman(2))  // II.
console.log(convertToRoman(3))  // III.
console.log(convertToRoman(4))  // IV.
// console.log(convertToRoman(5))  // V.
// console.log(convertToRoman(9))  // IX.
// console.log(convertToRoman(12)) // XII.
// console.log(convertToRoman(16)) // XVI.
// console.log(convertToRoman(29)) // XXIX.
// console.log(convertToRoman(44)) // XLIV.
// console.log(convertToRoman(45)) // XLV.
// console.log(convertToRoman(68)) // LXVIII
// console.log(convertToRoman(83)) // LXXXIII
// console.log(convertToRoman(97)) // XCVII
// console.log(convertToRoman(99)) // XCIX
// console.log(convertToRoman(400))    // CD
// console.log(convertToRoman(500))    // D
// console.log(convertToRoman(501))    // DI
// console.log(convertToRoman(649))    // DCXLIX
// console.log(convertToRoman(798))    // DCCXCVIII
// console.log(convertToRoman(891))    // DCCCXCI
// console.log(convertToRoman(1000))   // M
// console.log(convertToRoman(1004))   // MIV
// console.log(convertToRoman(1006))   // MVI
// console.log(convertToRoman(1023))   // MXXIII
// console.log(convertToRoman(2014))   // MMXIV
// console.log(convertToRoman(3999))   // MMMCMXCIX


