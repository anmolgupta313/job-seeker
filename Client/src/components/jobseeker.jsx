import { useEffect, useState } from "react";

import "../components/css/jobseeker.css";

import search from "../logo/search.png";
// import useFetch from "../hook/useFetch";
import axios from "axios";
import { Link } from "react-router-dom";
import LogIn from "./login";
export default function JobSeeker({ token,setToken }) {
  const [data, setData] = useState([]);
  // const [saveJob, setSaveJob] = useState({
  //   title: "",
  //   employerName: "",
  //   location: "",
  //   jobId: "",
  // });
  const [inputQuery, setInputQuery] = useState({
    title: "",
  });

  const fetch = async (search, query) => {
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${search}`,
      headers: {
        "X-RapidAPI-Key": "6f16cd7c46mshabd910fa8c934a0p1ea582jsn7b0eba97913a",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: {
        query: `${query}`,
        page: "1",
        num_pages: "1",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return { data };
  };

  //   const { data } = useFetch("search", inputQuery.title);
  //   console.log(data, "dataaa");
  function onChange(e) {
    return setInputQuery((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }

  const userId = localStorage.getItem("userId");
  async function saveddJobs(data) {
    axios
      .post("http://localhost:3001/api/savedJob", {
        title: data.job_title,
        img: data.employer_logo,
        employerName: data.employer_name,
        location: data.job_country,
        jobId: data.job_id,
        user: userId,
      })
      .then((response) => {
        console.log(response.status);
      });
    // const postsavedJob =  await fetch("http://localhost:3001/api/savedJob", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: data.job_title,
    //     employerName: data.employer_name,
    //     location: data.job_country,
    //     jobId: data.job_id,
    //   }),
    //   headers: { "Content-type": "application/json" },
    // });

    // if (postsavedJob.ok) {
    //   console.log("perfect",postsavedJob.json());
    // } else {
    //   alert(postsavedJob.statusText);
    // }
  }

  //   console.log(inputQuery)
  //   function handleChange(e) {
  //       return setInputValue((value) => {
  //         return { ...value, [e.target.name]: e.target.value };
  //       });
  //     }
  console.log(data, "data");
  return (
    <div>
     { token?(
        <div>
      <div className="job-seeker-title-h1">
        {" "}
        <h1>
          Search For Your <mark className="mark">Dream Job</mark>
        </h1>
      </div>
      <div className="input-btn-main-div-job-seeker">
        <div className="input-div-job-seeker-searchbar">
          <input
            type="text"
            name="title"
            id="title"
            value={inputQuery.title}
            onChange={onChange}
          />
        </div>

        <div
          className="search-icon-div"
          onClick={() => {
            localStorage.setItem("query", inputQuery.title);
            fetch("search", inputQuery.title);
          }}
        >
          <img src={search} alt="" />
        </div>
      </div>
   

      <div className="main-card-div">
        {data.map((data) => {
          return (
            <div className="job-card-div-sub">
              <div className="logo-content-div">
                <div className="emp-logo-div">
                  <img src={data.employer_logo} alt="" />
                </div>
                <div className="job-card-content-div">
                  <Link to={`/jobdetail/${data.job_id}`}>
                    {" "}
                    <h4>{data.job_title}</h4>
                  </Link>
                  <p>Employer Name: {data.employer_name}</p>
                  <p>Location: {data.job_country}</p>
                </div>
              </div>
              <div className="job-seeker-btns-div">
                <div>
                  <a target="_blank" href={data.job_google_link}>
                    <button className="applynow-btn">Apply Now</button>
                  </a>
                </div>
                <div>
                  <button
                    className="applynow-btn"
                    id={data.job_id}
                    onClick={(e) => {
                      console.log(e.target.id);
                      if (e.target.id == data.job_id) {
                        // setSaveJob(() => {
                        //   return {

                        //     title: data.job_title,
                        //     employerName: data.employer_name,
                        //     location: data.job_country,
                        //     jobId: data.job_id,
                        //   };
                        // });

                        saveddJobs(data);
                        // console.log(saveJob);
                        // saveJobs()
                      } else {
                        console.log(e.target.value, "valueee");
                      }
                    }}
                  >
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>  ) :(<LogIn setToken={setToken} />)}
    </div>
  );
}
