import "../style/login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <div className="login-left">
                <div className="login-left-navbar">
                    <Link to="/" className="login-left-navbar-logo"></Link>
                    <div className="login-left-navbar-data">Not Member?<p style={{ color: "#0858F7", cursor: "pointer" }}> Create Account</p></div>
                </div>
                <form className="login-left-form">
                    <div className="login-left-form-head">Welcome To Systempackage</div>
                    <div className="login-left-form-input-password">
                        <input type="email" className="input1" placeholder="Enter Your Email" />
                    </div>
                    <div className="login-left-form-input-password">
                        <input type="password" className="input2" placeholder="Enter Your Password" />
                        <div className="input-password-logo"></div>
                    </div>
                    <Link to="/otp-verify" className="login-left-form-button">Next</Link>
                    <div className="login-left-form-forgot">Forgot Your Password?</div>
                </form>
                <div className="login-left-navbarNew">Not Member? <p style={{ color: "#0858F7", cursor: "pointer" }}> Create Account</p></div>
            </div>
            <div className="login-right"></div>
        </div>
    )
}