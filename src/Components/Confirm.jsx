import React from 'react'
import './css/Confirm.css'

const Confirm = () => {
    return (
        <div className='confirm-Container'>
            <div className="confirm-wrapper">
                <div className="confirmation">
                    <h2>Confirm Expense</h2>

                    <p>Are you sure you want to add this expense?</p>
                </div>

                <div className="confirm-expense-btn">
                    <button type='submit' className='expense-confirm-btn'>Confirm</button>
                    <button type='submit' className='expense-cancel-btn'>Cancel</button>
                </div>

        </div>
        </div >
    )
}

export default Confirm
