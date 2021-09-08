import { useHistory } from "react-router-dom";

const News = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };
  const goNews = () => {
    history.push("/news");
  };
  return (
    <div className="login-page">
      <div className="header">
        <div>LOGO</div>
        <div onClick={goHome} className="home-button">
          首頁
        </div>
        <div onClick={goNews} className="news-button">
          最新消息
        </div>
      </div>
      <div>目前所在News位置</div>
    </div>
  );
};

export default News;
