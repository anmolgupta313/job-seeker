import axios from "axios";

export const savedJob = (response) => {

  return {
    type: "save-job",
    payload: {
      saveJob: response
    },
  };
};

export const fetchApi = (data) => {
  const userId = localStorage.getItem("userId");
  return (dispatch) => {
    // dispatch(fetchUserRequest);
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
        dispatch(savedJob(response));
        console.log(response.status);
      })

      .catch((err) => {
        ;
      });
  };
};
