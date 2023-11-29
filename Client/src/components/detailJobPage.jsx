import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/detailJobPage.css"

export default function JobDetail() {
  const { job_id } = useParams();
  const query = localStorage.getItem("query");

  const [data, setData] = useState([]);
  const [tabId, setTabId] = useState(1);
  const [tabValue, setTabValue] = useState(1);
  useEffect(() => {
    Fetch("job-details", query, job_id);
    console.log(data);
  }, [query, job_id]);
  const Fetch = async (search, query, job_id) => {
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${search}`,
      headers: {
        "X-RapidAPI-Key": "6f16cd7c46mshabd910fa8c934a0p1ea582jsn7b0eba97913a",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: {
        query: `${query}`,
        job_id: `${job_id}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);

        setData(response.data.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    return { data };
  };
  function handleChange(e) {
    setTabId(e.target.id);
    setTabValue(tabId);
  }

  console.log(data, "dataa");
  return (
    <div>
        <div className="logo-div-employer"><img src={data.employer_logo} alt="" /></div>
      <div>
        <h2>{data.job_title}</h2>
      </div>


      <div className="tab-div">
        <div className="tabs-div-sub">
          <button
            id="1"
            value={tabId}
            onClick={handleChange}
            className={tabId == 1 ? "tabs-btn" : "tabs-btn-no-id"}
          >
           About
          </button>
          <button
            id="2"
            value={tabId}
            onClick={handleChange}
            className={tabId == 2 ? "tabs-btn" : "tabs-btn-no-id"}
          >
          Qualifications
          </button>

          <button
            id="3"
            value={tabId}
            onClick={handleChange}
            className={tabId == 3 ? "tabs-btn" : "tabs-btn-no-id"}
          >
          Benefits
          </button>
         
        </div>
      </div>
      {tabId == 1 && (
        <div className="job-content-div">
            <h3>About The Job</h3>
            <p className="sub-head">Overview</p>
         <p className="job-description-p">{data.job_description}</p>
         <a href={data.job_apply_link} target="_blank"><button className="apply-now-btn">Apply Now</button></a>
        </div>
      )}
      {tabId == 2 && (
        <div className="job-content-div">
              <h3>Qualifications</h3>
           <p>{data.job_highlights.Qualifications.map((list)=>{
return(<ul><li>{list}</li></ul>)
           })}</p>
           <a href={data.job_apply_link} target="_blank"><button className="apply-now-btn">Apply Now</button></a>
        </div>
      )}

{tabId ==3 && (
        <div className="job-content-div">
              <h3>Benefits</h3>
           <p>{data.job_highlights.Benefits.map((list)=>{
return(<ul><li>{list}</li></ul>)
           })}</p>
           <a href={data.job_apply_link} target="_blank"><button className="apply-now-btn">Apply Now</button></a>
        </div>
      )}
    </div>
  );
}
