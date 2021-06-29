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


let I = [1, 'I'];
let V = [5, 'V'];
let X = [10, 'X'];
let L = [50, 'L'];
let C = [100, 'C'];
let D = [500, 'D'];
let M = [1000, 'M'];

let romanArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
let numsArr = [1000, 500, 100, 50, 10, 5, 1];

// const ROMAN_NUMS_OBJ = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
// }
const ROMAN_NUMS_OBJ = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

// I, II, III, IV, V, VI, VII, VIII, IX, X 

function convertToRoman(num) {
    let currentTotal = 0;
    let str = '';
    for (let key in ROMAN_NUMS_OBJ) {

        // if 4, 9, 40, 90,400,900
        // these are exceptions
        while (num - ROMAN_NUMS_OBJ[key] >= 0) {

            num -= ROMAN_NUMS_OBJ[key];
            str += key;

            // if (num == 0) return str;
            // console.log(num);
            if (num == 0) break;
        }

        // while ((currentTotal + ROMAN_NUMS_OBJ[key]) <= num) {
        //     currentTotal += ROMAN_NUMS_OBJ[key];
        //     str += key;
        //     console.log(`${key}: ${str}`);
        // }
    }
    return str;
}




// -----------------------------


// console.log(convertToRoman(2))  // II.
// console.log(convertToRoman(3))  // III.
// console.log(convertToRoman(4))  // IV.
// console.log(convertToRoman(5))  // V.
// console.log(convertToRoman(9))  // IX.
// console.log(convertToRoman(12)) // XII.
// console.log(convertToRoman(16)) // XVI.
// console.log(convertToRoman(29)) // XXIX.
// console.log(convertToRoman(44)) // XLIV.
// console.log(convertToRoman(45)) // XLV.
// console.log(convertToRoman(68)) // LXVIII
// console.log(convertToRoman(83)) // LXXXIII
console.log(convertToRoman(97)) // XCVII
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


