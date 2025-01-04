import React, { useState } from 'react'
import './css/MonthSelector.css'

const MonthSelector = ({selected, setSelected}) => {


    const [isActive, setIsActive] = useState(false);
    const options = [
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
]; 

  return (
    <div className='dropdown'>
      <div 
      className="dropdown-btn"
       onClick={(e) => setIsActive(!isActive)}
       >
        {selected}
        <i class="fa-solid fa-chevron-down"></i>
        </div>
      {isActive && (
        <div className="dropdown-content">
            {options.map((option, index) => (
                <div 
                key={index}
                onClick={(e)=> {
                    setSelected(option)
                    setIsActive(false)
                }} 
                className="dropdown-item"
                >
                    {option}
                </div>
            ))}
      </div>
      )}
    </div>
  );
}

export default MonthSelector
