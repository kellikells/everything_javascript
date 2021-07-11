import React, { useState, useMemo } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';
// check for valid formats of phone number inputs



// 1 555 555 5555       
// --------------------------------

function telephoneCheck(str) {
    // the order of the "if" statements MATTERS, it will eliminate specificity 

    // if length is 10 == MUST BE ALL numbers
    if (str.length === 10) return (/\d{10}/).test(str);    // 5555555555

    let spaces = (/^\d{3}\s\d{3}\s\d{4}/).test(str);   // 555 555 5555  
    let dashes = (/^\d{3}\-\d{3}\-\d{4}/).test(str);  // 555-555-5555
    let parNoSpace = (/^\((\d{3})\)\d{3}-\d{4}/).test(str);  // (555)555-5555
    let parWithSpace = (/^\((\d{3})\)\s\d{3}-\d{4}/).test(str);   // (555) 555-5555

    let oneSpaces = (/^1\s\d{3}\s\d{3}\s\d{4}/).test(str);// 1 555 555 5555
    let oneDashes = (/^1\s\d{3}\-\d{3}\-\d{4}/).test(str);// 1 555-555-5555
    let oneParNoSpace = (/^1\(\d{3}\)\d{3}\-\d{4}/).test(str);// 1(555)555-5555
    let oneParWithSpace = (/^1\s\(\d{3}\)\s\d{3}\-\d{4}/).test(str);// 1 (555) 555-5555

    if (spaces || dashes || parNoSpace || parWithSpace || oneSpaces || oneDashes || oneParNoSpace || oneParWithSpace) {
        return true;
    } else { return false }

}
// --------------------------------

console.log(telephoneCheck("5555555555"))   // true.
console.log(telephoneCheck("555 555 5555"))    // true.
console.log(telephoneCheck("555-555-5555")) // true.
console.log(telephoneCheck("(555)555-5555"))    // true.
console.log(telephoneCheck("(555) 555-5555"))    // true.
console.log(telephoneCheck("1 555 555 5555"))   // true.
console.log(telephoneCheck("1 555-555-5555"))   // true.
console.log(telephoneCheck("1 (555) 555-5555")) // true.
console.log(telephoneCheck("1(555)555-5555"))   // true.
console.log(telephoneCheck("1 (555) 555-5555"))   // true.
console.log(telephoneCheck("555-5555"))    //false.