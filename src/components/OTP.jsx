import "../style/login.css"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Login() {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [second, setSecond] = useState(0)
    const [status, setStatus] = useState(false)

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    const timer = () => {
        second > 0 && setTimeout(() => setSecond(second - 1), 1000)
    }
    useEffect(() => {
        if (second === 0) {
            setStatus(false)
        }
        else {
            setStatus(true)
            timer()
        }
        if (otp[0].length === 1 && otp[1].length === 1 && otp[2].length === 1 && otp[3].length === 1 && otp[4].length === 1 && otp[5].length === 1) {
            window.open("/success", "_self")
        }
    })


    return (
        <div className="login">
            <div className="login-left">
                <div className="login-left-navbar">
                    <Link to="/" className="login-left-navbar-logo"></Link>
                    <div className="login-left-navbar-data">Not Member?<p style={{ color: "#0858F7", cursor: "pointer" }}> Create Account</p></div>
                </div>
                <form className="login-left-form">
                    <div className="login-left-form-head">Enter the verification code to continue</div>
                    <div className="login-left-form-data">We sent to hellouser@heads.design. If you don't see it check your spam.</div>
                    <div className="login-left-form-inputs">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                    </div>
                    <div className="login-left-form-next">
                        <Link to="/" className="login-left-form-next-back">Back</Link>
                        {
                            status ? <div className="login-left-form-next-timer">Resend 00:{second}</div> : <div className="login-left-form-next-timers" onClick={() => {
                                setSecond(30)
                            }}>Resend OTP</div>
                        }
                    </div>
                </form>
                <div className="login-left-navbarNew">Not Member? <p style={{ color: "#0858F7", cursor: "pointer" }}> Create Account</p></div>
            </div>
            <div className="login-right"></div>
        </div>
    )
}