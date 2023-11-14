import { useState } from "react";
import "../components/css/login.css";
export default function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    return setInputValue((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="login-main-div">
      <div className="heading-div">
        {" "}
        <h1>Log In</h1>
      </div>

      <form action="">
        <div className="form-sub-div">
          <div className="email-div">
            {" "}
            <label htmlFor="">
              Email Address
              <input
                onChange={handleChange}
                type="text"
                value={inputValue.email}
                id="email"
                name="email"
              />
            </label>
          </div>
          <div className="pass-div">
            <label htmlFor="">
              Password
              <input
                onChange={handleChange}
                type="text"
                value={inputValue.password}
                id="password"
                name="password"
              />
            </label>
          </div>

          <button>Log In</button>
        </div>
      </form>
    </div>
  );
}
