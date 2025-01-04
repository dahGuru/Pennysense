import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../css/Register.css'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/login')
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='regContainer'>
      <div className="regWrapper">
        {/* Left Panel */}

        <div className="leftPanel hide-mobile">
          <div className="leftPanelContainer">
            <div className="regImageContainer">
              <img src={assets.reg_img} alt="" />
            </div>

            <div className="leftPanelText">
              <h2 className="regHeading">Monitor your spending effortlessly</h2>
              <p className="regSubHeading">Simplify expense management</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div className="rightPanel">
          <header className="regHeader">
            <img className='regLogoIcon' src={assets.logo} alt="" />
            <span className='regLogoText'>Pennysense</span>
          </header>

          <div className="formContainer">
            <h1 className="regTitle">Create Your Pennysense Account</h1>

            <div className="regButtons">

              <button
                onClick={gotoLogin}
                className="regLoginBtn"
              >
                Login
              </button>

              <button
                onClick={() => navigate('/register')}
                className="regRegisterBtn"
              >
                Register
              </button>
            </div>

            <div className="nunitoDes">
              <p className="regDescription">Track your daily, weekly, and yearly expenses effortlessly</p>
            </div>


            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className='form'
            >
              <div className="formGroup">
                <label className="formLabel">
                  Email Address
                </label>
                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete='new-password'
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readonly')}
                  placeholder='Enter your Email Address'
                  className='formInput'
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">
                  User name
                </label>
                <input
                 name='username'
                 value={formData.username}
                 onChange={handleChange}
                 autoComplete='new-password'
                 readOnly
                 onFocus={(e) => e.target.removeAttribute('readonly')}
                 className='formInput'
                  type="text"
                  placeholder='Enter your User name'
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">
                  Password
                </label>
                <div className="passwordContainer">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your Password'
                    className='formInput'
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    name='password'
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='passwordToggle'
                  >
                    {showPassword ? <EyeOff size={20} style={{ background: "none" }} /> : <Eye size={20} style={{ background: "none" }} />}
                  </button>
                </div>
                </div>

                <div className="formGroup">
                  <label className="formLabel">
                    Referral Code (optional)
                  </label>
                  <input
                    type="text"
                    placeholder='Enter referral code'
                    className='formInput'
                  />
                </div>

                <div className="submitBtn">
                  <button 
                  type='submit' 
                  className="submitButton"
                  >
                    Register
                  </button>
                </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Register