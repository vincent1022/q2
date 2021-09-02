import React from 'react'
import './Login.css'
import { useHistory } from "react-router-dom"

const Login = () => {
  const history = useHistory()
  const goRegister = () => {
    history.push("/register")
  }
  const goHome = () => [
    history.push("/home")
  ]
  return (
    <div className="login-page">
      <div className="login-block">
        <div className="login-title">登入</div>
        <input className="account"/>
        <input className="password" type="password"/>
        <div className="register-button" onClick={goRegister}>註冊</div>
        <button className="login-button" onClick={goHome}>登入</button>
      </div>
    </div>
  )
}

export default Login