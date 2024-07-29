"use client"
import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    // let initialValue = "#e82626";
    console.log("key, value", key);
    const [storValue, setStorValue] = useState(() => {
        try {
            const getValue = localStorage.getItem(key)
            const store = getValue ?? JSON.parse(getValue)
            console.log("getValue ==>", getValue, "store ==>", store);
            return store;
        } catch (error) {
            console.log("error ===========>", error);
            // return  initialValue
        }
    })

    console.log("storValue", storValue);
    useEffect(() => {
        localStorage.setItem("colorPicker", JSON.stringify(storValue))
    }, [key, storValue])

    return [storValue, setStorValue]
}

export default useLocalStorage
