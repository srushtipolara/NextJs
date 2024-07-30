import React from 'react'

const Buttons = ({ num, handleChange }) => {

    return (
        <button type='button' className="w-[2rem] h-[2rem] items-center border border-slot-400" onClick={() => handleChange(num)}>{num}</button>
    )
}

export default Buttons;
