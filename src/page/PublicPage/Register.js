import React from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory()
  const goLogin = () => {
    history.push("/login")
  }
  return (
    <div className="login-page">
      <div className="login-block">
        <div className="login-title">註冊</div>
        <input className="account"/>
        <input className="password" type="password"/>
        <input className="password" type="password"/>
        <div className="register-button" onClick={goLogin}>返回登入</div>
        <button className="login-button">註冊</button>
      </div>
    </div>
  )
}

export default Register