import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory()
  const goHome = () => {
    history.push("/home")
  }
  const goNews = () => {
    history.push("/news")
  }
  return (
    <div className="login-page">
      <div className="header">
        <div onClick={goHome}>首頁</div>
        <div onClick={goNews}>最新消息</div>
      </div>
      目前所在Home位置
    </div>
  )
}

export default Home