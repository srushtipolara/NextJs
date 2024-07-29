"use client"
import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

const ColorPicker = () => {
  // const [value, setValue] = useLocalStorage("colorPicker")
  const [value, setValue] = useState()

  const changeColor = (event) => {
    // localStorage.setItem("colorPicker", JSON.stringify(event))
    localStorage.setItem("colorPicker", color)
    setValue(event)
  }
  useEffect(() => {
    // const getColor = JSON.parse(localStorage.getItem("colorPicker"));
    const getColor = localStorage.getItem("colorPicker")
    setValue(getColor)
  }, [])

  return (
    <div>
      <div className='w-10 h-10' style={{ backgroundColor: value }}></div>
      <div>
        <input type='color' id="colorInput" className='hidden' value={value} onChange={(e) => changeColor(e.target.value)} />
        <label htmlFor='colorInput' className='w-5 h-5 text-xs text-white' style={{ backgroundColor: value }}>Color</label>
      </div>
    </div>
  )
}

export default ColorPicker