import { useState } from "react";
import auth from "../utils/auth/auth";
import "../components/css/signUp.css";
export default function LogIn() {

    const [userData,setUserData]= useState([])
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

 

  function handleChange(e) {
    return setInputValue((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }
  async function user(e) {
    e.preventDefault();
    const postUser = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
      headers: { "Content-type": "application/json" },
    });


    const resLogin= await postUser.json()
    setUserData(resLogin)

    // calling auth login function which is setting token in localstorage
   auth.login(resLogin.token)
  }

  console.log(inputValue, "Value");
  console.log(userData,"UserData")
  return (
    <div className="login-main-div">
      <div className="heading-div">
        {" "}
        <h1>Log In</h1>
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

          <button>Log In</button>
        </div>
      </form>
    </div>
  );
}
