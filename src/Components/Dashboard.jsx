import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './css/Dashboard.css'
import Month from './Month'
import Year from './Year'
import Expense from './Expense'
import MonthSelector from './MonthSelector'
import { useNavigate } from 'react-router-dom'
import DashboardExpense from './DashboardExpense'
import DashboardStatement from './DashboardStatement'


const Dashboard = () => {

  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/login')
  }


  const [selected, setSelected] = useState('DEC');
  const [yearSelected, setYearSelected] = useState(2024);

  return (
    <div className='dashboardContainer'>
      <div className="dashboardWrapper">

        {/* Left Panel */}
        <DashboardStatement/>

        {/* Right Panel */}
        <DashboardExpense/>
        



      </div>
    </div>
  )
}

export default Dashboard
