import React from 'react'
import { assets } from '../assets/assets'
import './css/Success.css'

const Success = () => {
  return (
    <div className='success-container'>
      <div className="success-wrapper">
        <img src={assets.success} alt="" />
        <h2>Expense successfully added</h2>
      </div>
    </div>
  )
}

export default Success
