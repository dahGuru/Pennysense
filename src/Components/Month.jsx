import React from 'react'
import './css/Month.css'

const Month = () => {


    const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
    ]


    return (
        <div className='month-container'>
            <div className="month">
               <select name="" id="">
               {months.map((item,index) => (
                    <option
                    className='monthly'
                    key={index}
                    >
                        {item}
                    </option>
                ))}
               </select>
            </div>
        </div >
    )
}

export default Month
