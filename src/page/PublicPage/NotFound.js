import React from 'react'
import './Login.css'
import { useHistory } from "react-router-dom"

const NotFound = () => {
  const history = useHistory()
  const goRegister = () => {
    history.push("/register")
  }
  const goHome = () => [
    history.push("/home")
  ]
  return (
    <div className="login-page">
      Not Found
    </div>
  )
}

export default NotFound