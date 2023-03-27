import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import OTP from './components/OTP';
import Success from './components/Success';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/otp-verify' element={<OTP />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
