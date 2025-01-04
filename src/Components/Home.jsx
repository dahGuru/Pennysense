import React from 'react'
import './css/Home.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className='home-container'>
      <div className='container'>
        <img src={assets.logo} alt="" />
        <h3>Pennysense</h3>
      </div>

      <div className='container-btn'>
        <Link to='./register'>
          <button type='submit'>Start here</button>
        </Link>
      </div>
    </div>
  )
}

export default Home