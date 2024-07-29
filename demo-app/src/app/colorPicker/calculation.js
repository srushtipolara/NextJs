"use client"
import React, { useEffect, useState } from 'react'
import Buttons from './buttons'

const Calculation = () => {

    const number = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    const [allNumber, setAllNumber] = useState([]);
    const [splitIndex, setSplitIndex] = useState(null);
    const [calculationIcon, setCalculationIcon] = useState(null)
    const [showTotal, setShowTotal] = useState(false)
    const [total, setTotal] = useState()

    const handleNumberAdd = (number) => {
        if (isNaN(number)) {
            setCalculationIcon(number)
            const index = allNumber.length
            setSplitIndex(index)
        }
        setAllNumber(prevNumbers => [...prevNumbers, number]);
    }
    console.log("allNumber", allNumber);

    const multiplicationFunction = (startNum, endNum) => {
        console.log("startNum, endNum", startNum, endNum);
        const sum = startNum * endNum;
        setTotal(sum)
    }

    const minusFunction = (startNum, endNum) => {
        console.log("startNum, endNum", startNum, endNum);
        const sum = startNum - endNum;
        setTotal(sum)
    }

    const addFunction = (startNum, endNum) => {
        console.log("startNum, endNum", typeof startNum,typeof endNum);
        const sum = parseInt(startNum) + parseInt(endNum);
        setTotal(sum)
    }

    const totalFunction = () => {
        setShowTotal(true)
    }

    const clearFunction = ()=> {
        setShowTotal(false);
        setTotal('')
        setAllNumber([])
    }

    useEffect(() => {
        if (splitIndex !== null && calculationIcon !== null) {
            const startNum = allNumber.slice(0, splitIndex).join("")
            let endNum = allNumber.slice(splitIndex)
            endNum.splice(0, 1)
            switch (calculationIcon) {
                case '✖':
                    multiplicationFunction(startNum, endNum.join(""));
                    break;
                case '-':
                    minusFunction(startNum, endNum.join(""));
                    break;
                case '+':
                    addFunction(startNum, endNum.join(""));
                    break;
                default:
                    console.log("No valid calculation icon found.");
            }
        }
    }, [allNumber, splitIndex, calculationIcon])

    return (
        <React.Fragment>
            <div>Calculation is {showTotal && total}</div>
            <div className='grid grid-rows-1 grid-flow-col  gap-4 w-52'>
                <div className='grid grid-cols-3'>
                    {
                        number.map((item) => (
                            <Buttons key={item} number={item} onAddNumber={handleNumberAdd} />
                        ))
                    }
                </div>
                <div className='grid grid-cols-1'>
                    <Buttons number="✖" onAddNumber={handleNumberAdd} />
                    <Buttons number="-" onAddNumber={handleNumberAdd} />
                    <Buttons number="+" onAddNumber={handleNumberAdd} />
                    <button onClick={totalFunction}>=</button>
                    <button onClick={clearFunction}>clear</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Calculation