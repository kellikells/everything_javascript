
import React, { useState, useMemo } from 'react';

export const ignoreCase = useMemo(() => {
    if (userInput == null) return null;
    // return palindrome(userInput);
    return userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase();
}, [userInput]);