import logo from "./logo.svg";
import auth from "./utils/auth/auth";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/login";
import SignUp from "./components/signUp";
import Header from "./components/header";
import JobSeeker from "./components/jobseeker";
import JobDetail from "./components/detailJobPage";
import SavedJobs from "./components/savedJobs";
function App() {
  const [token, setToken] = useState();

  const [windowDimenssion, detectW] = useState({
    minWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectW({
      minWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    const getToken = auth.loggedIn();

    setToken(getToken);
  }, [token]);
  return (
    <BrowserRouter>
      <Header
        token={token}
        windowDimenssion={windowDimenssion}
        detectSize={detectSize}
      />
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<LogIn token={token} setToken={setToken} />}
          />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/jobseeker" element={<JobSeeker token={token} setToken={setToken} /> } />
          <Route path="/jobdetail/:job_id" Component={JobDetail} />
          <Route path="/savedjobs" element={<SavedJobs token={token} setToken={setToken} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
