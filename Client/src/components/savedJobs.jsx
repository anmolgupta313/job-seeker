import axios from "axios";
import { useState, useEffect } from "react";
import "../components/css/savedjob.css";
import { Link } from "react-router-dom";
import LogIn from "./login";
import { removeJob } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function SavedJobs({ token, setToken }) {
  const dispatch = useDispatch();
  const Job = useSelector((state) => {
    return state;
  });
  console.log(Job);
  const [savedJobData, setSavedJobData] = useState([]);
  useEffect(() => {
    fetchSavedJobs("savedJob", savedJobData.length);
  }, []);
  function fetchSavedJobs(data) {
    axios.get(`http://localhost:3001/api/${data}`).then(function (response) {
      setSavedJobData(response.data);
      console.log(savedJobData);
    });
  }

  // function removeSaveJob(data) {
  //   // const jobId= e.target.id
  //   axios
  //     .delete(`http://localhost:3001/api/savedJob/delete/${data}`)
  //     .then(function (response) {
  //       // setSavedJobData(response.data);
  //       console.log(response.data, "done deleted");
  //     });
  // }
  return (
    <div>
      {token ? (
        <div className="main-card-savedjob-div">
          {savedJobData.map((data) => {
            return (
              <div className="saved-job-card-div-sub">
                <div className="logo-content-div">
                  <div className="emp-savedjob-logo-div">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="job-card-content-div">
                    <Link to={`/jobdetail/${data.jobId}`}>
                      {" "}
                      <h4>{data.title}</h4>
                    </Link>
                    <p>Employer Name: {data.employerName}</p>
                    <p>Location: {data.location}</p>
                  </div>
                  <div>
                    <button
                      className="remove-btn"
                      id={data._id}
                      onClick={(e) => {
                        // removeSaveJob(data._id);
                        dispatch(removeJob(data._id))
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div></div>
              </div>
            );
          })}
        </div>
      ) : (
        <LogIn setToken={setToken} />
      )}
    </div>
  );
}
