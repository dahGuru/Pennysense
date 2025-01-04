import React from 'react'
import './css/Dashboard.css'
import { useNavigate } from 'react-router-dom'

const DashboardExpense = () => {


    const navigate = useNavigate();

    const gotoLogin = () => {
      navigate('/login')
    }
    return (
        <>
            <div className="dashboardRight">
                <header className="regHeader">

                    <li className="dashboard-dropdown">
                        <a href="" className='dashboard-dropdown-btn'>
                            <i class="fa-regular fa-user"></i>
                            <span className='regLogoText'>Welcome, User</span>
                        </a>

                        <div className="dashboard-dropdown-content">
                            <p className="dashboard-dropdown-item"><a href="">My Profile</a></p>
                            <p className="dashboard-dropdown-item"><a href="">Settings</a></p>
                            <p className="dashboard-dropdown-item"><a href="" onClick={gotoLogin}>Log Out</a></p>
                        </div>
                    </li>
                </header>

                <div className="dashboardFormContainer">
                    <form action=""
                        autoComplete='new-password'
                        className='dashboardForm'
                    >
                        <input
                            type="text"
                            placeholder='How much spent in total(   )'
                            autoComplete='new-password'
                        />

                        <div className="date-spent-container">
                            <div className="date-spent">
                                <i class="fa-solid fa-calendar-days"></i>
                                <input
                                    type="date"
                                    placeholder='Date Spent'
                                    autoComplete='new-password'
                                />
                            </div>
                        </div>

                        <div className="ItemAndAmount">
                            <input
                                type="text"
                                placeholder='Item'
                                autoComplete='new-password'

                            />

                            <input
                                type="text"
                                placeholder='Amount(   )'
                                autoComplete='new-password'

                            />
                        </div>

                        <div className="add">
                            <button 
                            // onClick={() => navigate('/dashboard-add-expense')}
                            >
                                <i class="fa-solid fa-plus expenseIcons"></i>
                                Add Expense
                            </button>
                        </div>


                        <textarea
                            name=""
                            id=""
                            placeholder='Additional Information'
                        />


                        <div className="expenseSubmitBtn">
                            <button
                                type='submit'
                                className="expense-btn"
                                onClick={() => navigate('/dashboard-add-expense')}
                            >
                                Confirm Expense
                            </button>
                        </div>


                    </form>


                </div>
            </div>
        </>
    )
}

export default DashboardExpense
