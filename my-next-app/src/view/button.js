"use client"
import React, { useEffect } from 'react'
import { createCookies, getCookies } from '@/app/action';

const Button = ({ item }) => {

    const handleClick = async () => {
        try {
            await createCookies("name", "lee");
        } catch (error) {
            console.error('Error creating:', error);
        }
    }
    const handleClickButton =  () => {
        alert(`Hello No ${item._id}`);
        handleClick();
    };
    
    useEffect(() => {
       const fetchCookies = async() => {
        try {
            const cookiesStore = await getCookies("name");
            console.log("cookiesStore", cookiesStore);
        } catch (error) {
            console.error('Error creating:', error);
        }
       }
       fetchCookies()
    }, [])

    return (
        <React.Fragment>
            <button onClick={handleClickButton}>click me</button>
        </React.Fragment>
    )
}

export default Button