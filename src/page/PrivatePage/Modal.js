import { useEffect,useState } from "react";
import './Home.css'

const Modal = props => {
  console.log(9999,props)
  const [name, setName] = useState('')
  const handleSubmit = () => {
    if (name !== "" ) {
      fetchAPI();
    }
  };
  const fetchAPI = () => {
    const data = { name: name };
    const headData = sessionStorage.getItem('token');
    fetch("https://l8-upgrade-apis.vercel.app/api/users/updateName", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: ({
        Authorization: 'Bearer '+ headData,
        'content-type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => props.setVisible(false));
  };
  return (
    <div className="box">
      <div className="block">
        <div className="block-header">使用者資料補全</div>
        <form className="form-block">
          <label className="block-name">
            請輸入使用者名稱
            <input
              type="text"
              className="name"
              required="required"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="button" id="submit-btn" onClick={handleSubmit}>
            確定
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;