"use client"
import React, { useEffect, useState } from 'react'
import Buttons from './buttons'

const Calculation = () => {

    const number = ["%", "CE", "C", 7, 8, 9, 4, 5, 6, 1, 2, 3, "+/-", 0, "."];

    const [allNumber, setAllNumber] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [lastNumber, setLastNumber] = useState();
    const [splitIndex, setSplitIndex] = useState(null);
    const [calculationIcon, setCalculationIcon] = useState(null)
    const [showTotal, setShowTotal] = useState(false)
    const [total, setTotal] = useState(null)

    const handleNumberAdd = (number) => {
        if (isNaN(number)) {
            setCalculationIcon(number)
            const index = allNumber.length
            setSplitIndex(index)
        }
        setAllNumber(prevNumbers => [...prevNumbers, number]);
    }
    console.log("allNumber", allNumber);

    const handleChange = (number) => {
        console.log("number ==>", number);
        setCurrentNumber(number)
        handleNumberAdd(number)
    }

    const totalFunction = () => {
        setShowTotal(true)
    }

    const clearFunction = () => {
        setShowTotal(false);
        setTotal('')
        setAllNumber([])
        setLastNumber(null);
        setCurrentNumber(0);
    }

    const performanceOperation = (startNum, endNum, calculationIcon) => {
        let result;
        switch (calculationIcon) {
            case '✖':
                result = startNum * endNum;
                break;
            case '-':
                result = startNum - endNum;
                break;
            case '+':
                result = startNum + endNum;
                break;
            default:
                console.log("No valid calculation icon found.");
        }
        console.log('result ==>', result);
        setTotal(result)
        setLastNumber(result);
    }
    console.log("lastNumber", lastNumber);
    useEffect(() => {
        console.log("splitIndex", splitIndex, 'calculationIcon', calculationIcon);
        if (splitIndex !== null && calculationIcon !== null) {
            const startNum = parseInt(allNumber.slice(0, splitIndex).join("")) || lastNumber;
            console.log("startNum", startNum, "total", total);
            let endNum = parseInt(allNumber.slice(splitIndex + 1).join("")) || 0
            if (startNum !== null) {
                performanceOperation(startNum, endNum, calculationIcon)
            }
        }
    }, [allNumber, splitIndex, calculationIcon, lastNumber])

    return (
        <React.Fragment>
            <div>Calculation is {showTotal ? total : currentNumber}</div>
            <div className="gap-1 !flex w-52">
                <div className="grid grid-cols-3 gap-1">
                    {
                        number.map((item) => (
                            <Buttons key={item} num={item} handleChange={handleChange} />
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 gap-1">
                    <Buttons num="🆑" handleChange={clearFunction} />
                    <Buttons num="✖" handleChange={handleChange} />
                    <Buttons num="-" handleChange={handleChange} />
                    <Buttons num="+" handleChange={handleChange} />
                    <Buttons num="=" handleChange={totalFunction} />
                </div>
            </div>

        </React.Fragment >
    )
}

export default Calculation