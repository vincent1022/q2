import { useHistory } from "react-router-dom";
import './Home.css'
import user from "./../../assets/avatar.png"
import ring from "./../../assets/ring.png"
import back from "./../../assets/back.png"
import { useEffect,useState } from "react";
import Modal from "./Modal";

const Home = () => {
  const [userMesage, setUserMessage] = useState('')
  const [visible, setVisible] = useState(true)
  const history = useHistory();
  useEffect(() => {
    fetchAPI()
  }, []);
  const goLogin = () => {
    history.push("/");
    sessionStorage.removeItem("token");
  };
  const goHome = () => {
    history.push("/home");
  };
  const fetchAPI = () => {
    const data = sessionStorage.getItem('token');
    fetch("https://l8-upgrade-apis.vercel.app/api/user", {
      method: "GET",
      headers: ({
        Authorization: 'Bearer '+ data
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setUserMessage(response.data));
  };
  console.log(4444,visible)
  return (
    <div className="home-page">
      <div className="header">
        <div className="title-group">
          <div className="logo" onClick={goHome}>LOGO</div>
          <label htmlFor="burger" className="burger">☰</label>
        </div>
        <div className="function-group">
          <img src={ring} className="ring" />
          <img src={user} className="avatar"/>
          <div className="account-name">account</div>
          <img src={back} onClick={goLogin} className="back-login"/>
        </div>
      </div>
      <div className="section">
        <div className="sidebar">
          <div className="personal-management">
            <div>
              個人資訊管理
            </div>
            <div>
              帳戶設定
            </div>
          </div>
          {userMesage.role === 'ADMIN' && (
            <div className="member-management">
              會員管理
            </div>
          )}
        </div>
        <div className="content">
          首頁
        </div>
      </div>
      {(userMesage.name === '' || userMesage.name === undefined) && visible && (
        <Modal visible={visible} setVisible={setVisible}/>
      )}
    </div>
  );
};

export default Home;
