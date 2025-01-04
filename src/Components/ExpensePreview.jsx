import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/ExpensePreview.css'

const ExpensePreview = () => {


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

                {/* Expense Preview      */}
                <div className="dashboardExpensePreview">
                    <div className="expensePreview">
                        <h2>Expense Preview</h2>


                        <div className="previewItem">
                            <p className="previewContent">Amount Spent</p>
                            <span className='previewSpan'>10,000</span>
                        </div>
                        <div className="previewItem">
                            <p className="previewContent">Date Spent</p>
                            <span className='previewSpan'>11/11/2024</span>
                        </div>
                        <div className="previewItem">
                            <p className="previewContent">Expense Details</p>
                            <div className="detailer">
                            <span className='previewSpan expenseDetail'>Food</span>
                            <span className='previewSpan expenseDetail'>5000</span>
                            </div>
                             <div className="detailer">
                            <span className='previewSpan expenseDetail'>Drink</span>
                            <span className='previewSpan expenseDetail'>5000</span>
                            </div>
                        </div>
                        <div className="previewItem">
                            <p className="previewContent">Additional Information</p>
                            <span className='previewSpan additionalInfo'>I spent an additional 2000 on extras before i got my goods </span>
                        </div>
           
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpensePreview
