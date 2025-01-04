import React from 'react'
import Confirm from './Confirm'
import Success from './Success'
import DashboardExpense from './DashboardExpense'
import DashboardStatement from './DashboardStatement'

const Admin = () => {
  return (
    <div className='dashboardContainer'>
      <div className="dashboardWrapper">
      <DashboardStatement/>
     <DashboardExpense/>
      </div>
    </div>
  )
}

export default Admin
