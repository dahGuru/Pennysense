import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../css/Register.css'
import '../css/ResetPassword.css'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {


  const [formData, setFormData] = useState({
    password: '',
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
            <div className="imageContainer">
              <img src={assets.reset_img} alt="" />
            </div>

            <div className="leftPanelText resetPanelText">
              <h2 className="regHeading">Track your expenses</h2>
              <p className="regSubHeading resetSubHeading">Gain full control of your budget by streamlining your expense tracking process</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div className="rightPanel">
          <header className="regHeader">
            <img className='regLogoIcon' src={assets.logo} alt="" />
            <span className='regLogoText'>Pennysense</span>
          </header>

          <div className="formContainer resetContainer">
            <h1 className="regTitled">Reset Password</h1>


            <div className="nunitoDesc">
              <p className="regDescription">Dont worry! We'll help you get back on track, Enter your registered email address</p>
            </div>


            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className='form'
            >
              <div className="formGroup">
                <label className="formLabel">
                  New Password
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
                  Confirm New Password
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


              <div className="submitBtn resetButton">
                <button
                  onClick={gotoLogin}
                  type='submit'
                  className="submitButton"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ResetPassword