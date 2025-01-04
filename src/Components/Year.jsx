import React, { useState } from 'react'
import './css/Year.css'
const Year = ({yearSelected, setYearSelected}) => {
    

    const yearOptions = [
        '2030',
        '2029',
        '2028',
        '2027',
        '2026',
        '2025',
        '2024',
        // '2023',
        // '2022',
        // '2021',
        // '2020',
        // '2019',
        // '2018',
        // '2017',
        // '2016',
        // '2015',
        // '2014',
        // '2013',
        // '2012',
        // '2011',
        // '2010',
        // '2009',
        // '2008',
        // '2007',
        // '2006',
        // '2005',
        // '2004',
        // '2003',
        // '2002',
        // '2001',
        // '2000',
    ]
    const [isActive, setIsActive] = useState(false);

    return (
      <div className='dropdown'>
        <div 
        className="dropdown-btn"
         onClick={(e) => setIsActive(!isActive)}
         >
          {yearSelected}
          <i class="fa-solid fa-chevron-down"></i>
          </div>
        {isActive && (
          <div className="dropdown-content">
              {yearOptions.map((option, index) => (
                  <div 
                  key={index}
                  onClick={(e)=> {
                      setYearSelected(option)
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

export default Year




const MonthSelector = ({selected, setSelected}) => {


   
}



