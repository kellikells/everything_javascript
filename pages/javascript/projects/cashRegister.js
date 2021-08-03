import React, { useState, useMemo } from 'react';

import GenericHeader from '../../../components/commons/GenericHeader';
import ClearButton from '../../../components/buttons/ClearButton';
import SubmitButton from '../../../components/buttons/SubmitButton';
import { InputSection } from '../../../components/forms/InputSection';


export default function cashRegister() {
    const [userInputPrice, setUserInputPrice] = useState('');
    const [userInputCash, setUserInputCash] = useState('');
    const [userInputCID, setUserInputCID] = useState('');

    const [pennyAmount, setPennyAmount] = useState('$0.00')
    const [nickelAmount, setNickelAmount] = useState('$0.00')
    const [dimeAmount, setDimeAmount] = useState('$0.00')
    const [quarterAmount, setQuarterAmount] = useState('$0.00')
    const [oneAmount, setOneAmount] = useState('$0.00')
    const [fiveAmount, setFiveAmount] = useState('$0.00')
    const [tenAmount, setTenAmount] = useState('$0.00')
    const [twentyAmount, setTwentyAmount] = useState('$0.00')
    const [hundredAmount, setHundredAmount] = useState('$0.00')

    const [output, setOutput] = useState('');

    const inputsObjArr = [
        {
            input: userInputPrice,
            set: setUserInputPrice,
            handleChange: handleChangePrice,
            text: 'Item Price...',
        },
        {
            input: userInputCash,
            set: setUserInputCash,
            handleChange: handleChangeCash,
            text: 'Amount Paid...',
        },
        {
            input: userInputCID,
            set: setUserInputCID,
            handleChange: handleChangeCID,
            text: 'Register Total...',
        }
    ];

    const registerInputsObjArr = [
        {
            input: pennyAmount,
            set: setPennyAmount,
            text: 'PENNIES',
            placeholder: '.test penny input..'
        },

    ];



    function handleChangePrice(e) {
        setUserInputPrice(e.target.value);
    }
    function handleChangeCash(e) {
        setUserInputCash(e.target.value);
    }
    function handleChangeCID(e) {
        setUserInputCID(e.target.value);
    }
    function handleSubmit() {
        // setOutput(checkCashRegisterFunction(userInputPrice, userInputCash, userInputCID));
        setOutput('clicked submit');
    }
    function handleClick(e) {
        setUserInputPrice('');
        setUserInputCash('');
        setUserInputCID('');
    }

    function checkCashRegisterFunction(price, cash, cid) {
        const UNIT_VALUES = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

        // let updatedCid = JSON.parse(JSON.stringify(cid));
        let mutatedCid = JSON.parse(JSON.stringify(cid));
        var change = {
            status: 'INSUFFICIENT_FUNDS',
            change: [],
        };
        let cidTotal = 0;

        // 1- get the cid total
        for (let i = 0; i < cid.length; i++) {
            cidTotal += (cid[i])[1];
        }
        cidTotal = cidTotal.toFixed(2);

        let unitCountArr = mutatedCid.map((unit, index) => {
            return Math.round(unit[1] /= UNIT_VALUES[index]);
        })

        // 2- get (cash-price)
        let changeNeeded = cash - price;


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
            }
            if (currCount > 0) {
                currChangeArr.push([(cid[i])[0], currAmount]);
            }

            // ********* if changeNeeded can be made from cid  // {status: "OPEN", change: [<price-cash> ordered highest to lowers]},
            console.log(currTotalFromCid.toFixed(2))
            if (currTotalFromCid.toFixed(2) == changeNeeded) {
                change.status = 'OPEN';
                change.change = currChangeArr;
                return change;
            }
        }
    }



    return (
        <div className='flex flex-col h-full md:container mx-auto '>

            <GenericHeader title='Cash Register App' />
<form>
            <section className='flex justify-between'>

                {inputsObjArr.map((user, index) => (
                    <section key={index}>
                        <input
                            key= {index}
                            onChange={user.handleChange}
                            value={user.input}
                            id={user.input}
                            name={user.input}
                            type='text'
                            placeholder={user.text}
                            className='p-3 border-gray-500 bg-yellow-100 flex-grow'
                        />
                    </section>
                ))}

                {/* console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) */}



                <SubmitButton handleClick={handleSubmit} />
                <ClearButton handleClick={handleClick} />
            </section>

            <div className='flex justify-between'>
                Change Due:<strong>
                    {output}
                </strong>
            </div>

            {/* --------------------  */}
            {/* <div className='flex flex-row'>
                {inputsObjArr.map((user) => (
                    <InputSection userInput={user.input} labelText={user.text} handleChange={user.handleChange} column='yes' />
                ))}
            </div> */}

            <div className='flex flex-row'>
                {registerInputsObjArr.map((currency, index) => (
                    <InputSection key={index} userInput={currency.input} labelText={currency.text} handleChange={currency.set} column='yes' />
                ))}
            </div>
</form>
        </div>
    );


}



// ________________________________

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
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