import axios from "axios";
import { useState, useEffect } from "react";
export default function SavedJobs() {
  const [savedJobData, setSavedJobData] = useState([]);
  useEffect(() => {
    fetchSavedJobs("savedJob");
  }, []);
  function fetchSavedJobs(data) {
    axios.get(`http://localhost:3001/api/${data}`).then(function (response) {
      setSavedJobData(response.data);
      console.log(savedJobData);
    });
  }
  return (
    <div>
      <div className="main-card-div">
        {savedJobData.map((data) => {
          return (
            <div className="job-card-div-sub">
              <div className="logo-content-div">
                <div className="emp-logo-div">
                  <img src={data.img} alt="" />
                </div>
                <div className="job-card-content-div">
                  {/* <Link to={`/jobdetail/${data.job_id}`}> */}{" "}
                  <h4>{data.title}</h4>
                  {/* </Link> */}
                  <p>Employer Name: {data.employerName}</p>
                  <p>Location: {data.location}</p>
                </div>
              </div>

              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
