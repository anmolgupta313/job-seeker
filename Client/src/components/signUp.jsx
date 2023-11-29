import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/css/signUp.css";
export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

 
  const navigate = useNavigate();

  function handleChange(e) {
    return setInputValue((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }
  async function user(e) {
    e.preventDefault();
    const postUser = await fetch("http://localhost:3001/api/user", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
      headers: { "Content-type": "application/json" },
    });

    if (postUser.ok) {
      console.log("perfect", postUser.json());
    } else {
      alert(postUser.statusText);
    }

    navigate("/login");

  }

  console.log(inputValue, "Value");
  return (
    <div className="login-main-div">
      <div className="heading-div">
        {" "}
        <h1>Sign Up</h1>
      </div>

      <form action="" onSubmit={user}>
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

          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
