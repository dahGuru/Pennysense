import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Pages/Auth/Login'
import PasswordRecovery from './Pages/Auth/PasswordRecovery'
import Register from './Pages/Auth/Register'
import ResetPassword from './Pages/Auth/ResetPassword'
import Dashboard from './Components/Dashboard'
import Admin from './Components/Admin'
import DashboardAddExpense from './Components/DashboardAddExpense'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/password-recovery' element={<PasswordRecovery/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard-add-expense' element={<DashboardAddExpense/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </div>
  )
}

export default App