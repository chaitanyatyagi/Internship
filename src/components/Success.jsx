import "../style/login.css"
import { Link } from "react-router-dom"
export default function Success() {
    return (
        <div className="success">
            <Link to="/" className="success-logo"></Link>
            <div className="success-data">Success !</div>
        </div>
    )
}