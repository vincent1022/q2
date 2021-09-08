import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [isAccount, setIsAccount] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isCurrentPassword, setIsCurrentPassword] = useState("");
  const [isErrorPWD, setIsErrorPWD] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showAgain, setShowAgain] = useState(false);
  const history = useHistory();
  useEffect(() => {
    confirmPwdChecking();
    if (isMessage.success === true) {
      setTimeout(function () {
        history.push("/login");
        alert("註冊成功，請立即登入");
      }, 500);
    }
  }, [isCurrentPassword, isMessage]);
  const confirmPwdChecking = () => {
    if (isAccount !== "") {
      if (isPassword !== isCurrentPassword) {
        setIsErrorPWD("請輸入相同密碼");
      } else {
        setIsErrorPWD("");
      }
    }
  };
  const goLogin = () => {
    history.push("/login");
  };

  const handleSubmit = () => {
    if (isAccount !== "" && isPassword !== "" && isCurrentPassword !== "") {
      fetchAPI();
      // setIsMessage('註冊成功')
      // setTimeout(function(){ history.push("/login");alert('註冊成功，請立即登入') }, 500)
    }
  };
  console.log(2222, isMessage);
  const fetchAPI = () => {
    const data = { username: isAccount, password: isPassword };
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setIsMessage(response));
  };
  return (
    <div className="login-page">
      <div className="login-block">
        <div className="login-title">註冊</div>
        <form className="form-block">
          <label>
            帳號
            <input
              type="email"
              className="account"
              placeholder="必須是信箱"
              required="required"
              onChange={(event) => setIsAccount(event.target.value)}
            />
          </label>
          <label>
            密碼
            <input
              type={show ? "text" : "password"}
              className="password"
              placeholder="4-8字元；首尾必須是英文；中間必須是數字"
              required="required"
              onChange={(event) => setIsPassword(event.target.value)}
            />
            <div onClick={() => setShow(!show)}>不給你看</div>
          </label>
          <label>
            確認密碼
            <input
              type={showAgain ? "text" : "password"}
              className="password"
              placeholder="4-8字元；首尾必須是英文；中間必須是數字"
              required="required"
              onChange={(event) => setIsCurrentPassword(event.target.value)}
            />
            <div
              className="show-password"
              onClick={() => setShowAgain(!showAgain)}
            >
              不給你看
            </div>
          </label>
          {isErrorPWD !== "" && <div className="error">{isErrorPWD}</div>}
          <div className="register-button" onClick={goLogin}>
            返回登入
          </div>
          <button
            className="show-password"
            type="button"
            id="submit-btn"
            onClick={handleSubmit}
          >
            註冊
          </button>
          {isMessage.success === true && isMessage !== "" && (
            <div className="success">{isMessage.message}</div>
          )}
          {isMessage.success === false && (
            <div className="fail">{isMessage.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
