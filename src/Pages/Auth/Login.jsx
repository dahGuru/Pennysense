import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../css/Login.css'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {


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
      <div className="logWrapper">
        {/* Left Panel */}

        <div className="leftPanel hide-mobile">
          <div className="leftPanelContainer">
            <div className="imageContainer">
              <img src={assets.login_img} alt="" />
            </div>

            <div className="leftPanelText">
              <h2 className="logHeading">Track your expenses</h2>
              <p className="logSubHeading">Simplify your expense tracking and gain full control of your finances</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div className="rightPanel">
          <header className="logHeader">
            <img className='regLogoIcon' src={assets.logo} alt="" />
            <span className='regLogoText'>Pennysense</span>
          </header>

          <div className="formContainer">
            <h1 className="logTitle">Welcome to Pennysense</h1>

            <div className="logButtons">

              <button
                onClick={gotoLogin}
                className="logLoginBtn"

              >
                Login
              </button>

              <button
                onClick={() => navigate('/register')}
                className="logRegisterBtn"
              >
                Register
              </button>
            </div>

            <div className="nunitoDes">
              <p className="logDescription">Simplify your expense tracking and gain full control of your finances</p>
            </div>


            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className='form'
            >


              <div className="formGroup">
                <label className="formLabel">
                  User name
                </label>
                <input
                  type="text"
                  placeholder='Enter your User name'
                  className='logFormInput'
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
                    className='logFormInput'
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

              <div className="checkGroup">
                <div className="logCheck">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbtn"
                  />
                  <label>
                    Remember me
                  </label>
                </div>

                <div className="forgot">
                  <a className="forgot-pass" onClick={() => navigate('/password-recovery')}>
                    Forgot Password?
                  </a>
                </div>
              </div>


              <div className="submitBtn">
                <button
                  type='submit'
                  className="login-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  Login
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login