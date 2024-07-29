// "use client"

// import React, { useEffect, useState } from 'react'

// const Buttons = ({ number }) => {

//     let allNumber = [];

//     const handleChange = () => {
//         allNumber.push(number)
//     }

//     console.log("allNumber ==>", allNumber);

//     return (
//         <div >
//             <button type='button' onClick={handleChange}>{number}</button>
//         </div>
//     )
// }

// export default Buttons;

import React, { useState } from 'react'

const Buttons = ({ number, onAddNumber }) => {
    // Initialize state with an empty array
    // const [allNumber, setAllNumber] = useState([]);

    const handleChange = () => {
        // Update the state by adding the new number
        onAddNumber(number)
    }

    // Log the current state to see the numbers
    // console.log("allNumber ==>", allNumber);

    return (
        <div>
            <button type='button' onClick={handleChange}>{number}</button>
        </div>
    )
}

export default Buttons;
