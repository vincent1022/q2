import React, {useState,useEffect} from 'react'
import './Login.css'
import { useHistory } from "react-router-dom"

const Login = () => {
  const [account,setaccount] = useState('')
  const [password,setPassword] = useState('')
  const [isLogin,setIsLogin] = useState('')
  const [show, setShow] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if(isLogin.success === true && isLogin.token !== '') {
      history.push("/home")
      alert('登入成功')
    }
  }, [isLogin])
  const goRegister = () => {
    history.push("/register")
  }
  const handleSubmit = () => {
    if(account !== '' && password !== '') {
      fetchAPI()
    }
  }
  const fetchAPI = () => {
    const data = {'username': account , 'password': password}
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => setIsLogin(response))
  }
  return (
    <div className="login-page">
      <div className="login-block">
        <div className="login-title">登入</div>
        <form className="form-block">
          <label>
            帳號
            <input type="email" className="account" required="required" onChange={(event) => setaccount(event.target.value)}/>
          </label>
          <label>
            密碼
            <input type={show ? "text" : "password"} className="password" required="required" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => setShow(!show)}>不給你看</button>
          </label>
          <div className="register-button" onClick={goRegister}>註冊</div>
          <button type="button" id="submit-btn" onClick={handleSubmit}>
            登入
          </button>
          {isLogin.success === false && (
            <div className="fail">登入失敗，請再輸入一次</div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login