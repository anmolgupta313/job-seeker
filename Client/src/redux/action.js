import axios from "axios";

export const savedJob = (response) => {
  return {
    type: "save-job",
    payload: {
      saveJob: response,
    },
  };
};

export const delJob=(response=>{
  return{
    type:"del-job",
    payload:{delJob:response}
  }
})


export const getApiData=(response)=>{
  return{
    type:"get-Api-Data",
    payload:{
      getFetchData:response
    }
  }
}

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

      .catch((err) => {});
  };
};


export const getFetchData= (search, query)=>{
  return(dispatch)=>{
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

        // setData(response.data.data);

    dispatch(getApiData(response.data.data))
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();


    
    
  }
}


export const removeJob= (data)=>{
  return(dispatch)=>{
    axios
    .delete(`http://localhost:3001/api/savedJob/delete/${data}`)
    .then(function (response) {
      dispatch(delJob(response))
      // setSavedJobData(response.data);
      console.log(response.data, "done deleted");
    })
    .catch((err) => {});
    
  }
}
