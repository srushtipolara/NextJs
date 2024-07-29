"use client"
import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [storeValue, setStoreValue] = useState()

    const handleChange = (event) => {
        const color = event.target.value;
        window.localStorage.setItem(key, JSON.stringify(color))
        setStoreValue(color)
    }

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem(key))
        setStoreValue(store)
    }, [])

    return {
        storeValue,
        handleChange
    }
}

export default useLocalStorage