// import { ArrowRightToLineIcon } from 'lucide-react'
import React from 'react'
import './css/Expense.css'
const Expense = () => {
    return (
        <div className='expense-container'>
            <div className="expense-wrapper">
                <p className='expense-date'>
                    22/11/24
                </p>

                <p className='expense-item'>
                    Food & Drinks
                </p>
                <div className="expense-next">
                    <p className='expense-amount'>
                        N10,000
                        <i class="fa-solid fa-chevron-right"></i>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Expense
