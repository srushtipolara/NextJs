"use client"
import React from 'react'
import useLocalStorage from './useLocalStorage';

const ColorPickerCom = () => {

    const { storeValue, handleChange } = useLocalStorage("color");

    return (
        <main>
            <input type="color" id="colorId" className='inputColor' value={storeValue} onChange={handleChange} />
        </main>
    )
}

export default ColorPickerCom