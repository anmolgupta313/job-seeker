import { Link } from "react-router-dom";
import auth from "../utils/auth/auth";
import { useState, useEffect } from "react";
import "../components/css/header.css";
import hamburger from "../logo/hamburger.png";
import logo from "../logo/akicks.png";
import X from "../logo/x.png";

export default function Header({ token, windowDimenssion, detectSize }) {
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenssion.minWidth]);
  const [menuToggle, setMenuToggel] = useState(false);

  function mToggel() {
    setMenuToggel((prev) => {
      return !prev;
    });

    console.log(menuToggle, "t");
  }
  return (
    <div className="nav-main-div">
      <div className="logo-div">
        <img src={logo}></img>
      </div>

      {windowDimenssion.minWidth > 786 ? (
        <div className="main-nav-bar-links-div">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {token ? (
              ""
            ) : (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            )}

            {token ? (
              ""
            ) : (
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            )}
            {token ? (
              <li>
                <Link to="/jobseeker">Job Seeker</Link>
              </li>
            ) : (
              ""
            )}
            {token ? (
              <li>
                <Link to="/savedjobs">Saved Jobs</Link>
              </li>
            ) : (
              ""
            )}
            {token ? (
              <li onClick={auth.logout}>
                <Link to="/logIn">Logout</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {/* <div className="search-div">
            <input
              placeholder="Search Sneakers"
              onChange={inputChange}
              type="text"
              value={inputValue}
            ></input>
          </div> */}

          {/* <div className="search-result-main-div">{searchDisplay} </div> */}
        </div>
      ) : menuToggle == false ? (
        <div onClick={mToggel}>
          <img className="hamburger-img" src={hamburger} alt="" />
        </div>
      ) : (
        <div className="main-nav-bar-links-div">
          <div onClick={mToggel} className="x-div-main">
            <img className="closing-toggle-x" src={X} alt="" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {token ? (
              ""
            ) : (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            )}

            {token ? (
              ""
            ) : (
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            )}
            {token ? (
              <li>
                <Link to="/products">Products</Link>
              </li>
            ) : (
              ""
            )}
            {token ? (
              <li onClick={auth.logout}>
                <Link to="/logIn">Logout</Link>
              </li>
            ) : (
              ""
            )}
            {token ? (
              <li>
                <Link to="/savedjobs">Saved Jobs</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {/* <div className="search-div">
            <input
              placeholder="Search Sneakers"
              onChange={inputChange}
              type="text"
              value={inputValue}
            ></input>
          </div>
  
          <div className="search-result-main-div">{searchDisplay} </div> */}
        </div>
      )}
    </div>
  );
}
