import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../css/Register.css'
import '../css/PasswordRecovery.css'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {


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

    const gotoReset = () => {
        navigate('/reset-password')
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
                        <h1 className="regTitled">Password Recovery</h1>

                        <div className="nunitoDesc">
                            <p className="regDescription">A Reset link has been sent to your mail to reset your Password</p>
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
                                    required
                                />
                            </div>


                            <div className="submitBtn resetButton">
                                <button
                                    onClick={gotoReset}
                                    type='submit'
                                    className="submitButton"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div >
        </div >
    )
}

export default PasswordRecovery