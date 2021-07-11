import React, { useState, useMemo } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


// See below for an example of a cash -in -drawer array:
// [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]
// ________________________________


function checkCashRegister(price, cash, cid) {
    const UNIT_VALUES = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
    console.log(cid);
    // let updatedCid = JSON.parse(JSON.stringify(cid));
    let mutatedCid = JSON.parse(JSON.stringify(cid));
    var change = {
        status: 'INSUFFICIENT_FUNDS',
        change: [],
    };
    let cidTotal = 0;

    // 1- get the cid total
    for (let i = 0; i < cid.length; i++) {
        // console.log(`line41: ${(cid[i][1])}`)
        cidTotal += (cid[i])[1];
    }
    cidTotal = cidTotal.toFixed(2);
    // console.log(`line45: cidTotal: ${cidTotal}`);

    let unitCountArr = mutatedCid.map((unit, index) => {
        return Math.round(unit[1] /= UNIT_VALUES[index]);
    })
    // console.log(`line40: unitCountArr: ${unitCountArr}`)

    // 2- get (cash-price)
    let changeNeeded = cash - price;
    // console.log(`line52: changeNeeded: ${changeNeeded}`);


    // ********* if not enough cid 
    if (changeNeeded > cidTotal) {
        change.status = 'INSUFFICIENT_FUNDS';
        change.change = [];

        return change;
    }

    // ********* if (cash-price) == cid     // {status: "CLOSED", change: [<cid>]}
    if (changeNeeded == cidTotal) {
        change.status = 'CLOSED';
        change.change = cid;
        // change.change = updatedCid;
        console.log(change);
        return change;
    }

    // try to make the cashNeeded from cidTotal units
    // start from large units, and add as appropriate
    let currTotalFromCid = 0.00;
    let currChangeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {

        let currCount = 0;
        let currAmount = 0;
        while (((currTotalFromCid + UNIT_VALUES[i]).toFixed(2) <= changeNeeded) && (unitCountArr[i] > 0)) {
        // while ((currTotalFromCid + UNIT_VALUES[i] <= changeNeeded) && (unitCountArr[i] > 0)) {
            currTotalFromCid += UNIT_VALUES[i];
            // currTotalFromCid = currTotalFromCid.toFixed(2);
            unitCountArr[i]--;
            currCount++;
            currAmount += UNIT_VALUES[i];
            console.log(`currTotalFromCid = ${currTotalFromCid}`);
            console.log(`unitCountArr: ${unitCountArr}`);
        }
        if (currCount > 0) {
            currChangeArr.push([(cid[i])[0], currAmount]);
        }

        // ********* if changeNeeded can be made from cid  // {status: "OPEN", change: [<price-cash> ordered highest to lowers]},
        console.log(currTotalFromCid.toFixed(2))
        if (currTotalFromCid.toFixed(2) == changeNeeded) {
            change.status = 'OPEN';
            change.change = currChangeArr;
            console.log(change)
            return change;
        }
    }
    console.log(`the end ${change}`)
    // return change;

  
         return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Cash' />

            <section className='flex justify-between'>
                <section>
                    <input
                        onChange={handleChange}
                        value={userInput}
                        id='userInput'
                        name='userInput'
                        type='text'
                        placeholder='type here'
                        className='p-3 border-gray-500 bg-yellow-100 flex-grow'
                    />
                </section>
                <ClearButton handleClick={handleClick} />
            </section>

            <div className='flex justify-between'>
                Palindrome, ignoring character case:<strong>
                    {ignoreCase == null
                        ? null
                        : ignoreCase
                            ? 'Yes'
                            : 'No'}
                </strong>
            </div>
        </div>
    );
    

}



// ________________________________

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    //should return { status: "OPEN", change: [["QUARTER", 0.5]] }.
    
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    //{status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//     //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//     //{status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//     //{status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//     //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.