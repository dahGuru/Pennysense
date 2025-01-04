import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './css/Dashboard.css'
import Month from './Month'
import Year from './Year'
import Expense from './Expense'
import MonthSelector from './MonthSelector'
import { useNavigate } from 'react-router-dom'
const DashboardStatement = () => {



    
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/login')
  }


  const [selected, setSelected] = useState('DEC');
  const [yearSelected, setYearSelected] = useState(2024);


    return (
        <>

            <div className="dashboardLeft">
                <header className="dashboardHeader">
                    <img className='dashboardLogoIcon' src={assets.logo} alt="" />
                    <span className='dashboardLogoText'>Pennysense</span>
                </header>

                <div className="dashboardLeftContainer">
                    <div className="dashboardLeftWrapper">
                        <div className="accumulativeBox">
                            <p className='accumulative-date'>
                                This Month
                                <p className='accumulative-amount'>
                                    N0.00
                                </p>
                            </p>
                            <hr />
                            <p className='accumulative-date'>
                                This Year
                                <p className='accumulative-amount'>
                                    N0.00
                                </p>
                            </p>
                        </div>


                        <div className="expenseBox">
                            <div className="expenseCalender">
                                <MonthSelector selected={selected} setSelected={setSelected} />
                            </div>

                            <div className="expenseCalender">
                                <Year yearSelected={yearSelected} setYearSelected={setYearSelected} />
                            </div>

                            <div className="expenseCalender">
                                <div className="addExpense">
                                    <button
                                        type='submit'
                                        
                                    >
                                        Add Expense
                                        <i class="fa-solid fa-plus expenseIcon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="expenseHistory">
                    <p className='expense-Text'>Expense History</p>

                    <div className="expenseStatement">
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                        <Expense />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardStatement
