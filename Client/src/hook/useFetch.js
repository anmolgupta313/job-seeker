import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = async (search, query, job_id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
    console.log(data);
  }, [query, job_id]);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${search}`,
    headers: {
      "X-RapidAPI-Key": "1849d1bc0bmsh145861007f48993p11d674jsn8af4eed2eaf3",
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

      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const reFetch = () => {
    fetchData();
  };

  return { data, reFetch };
};

export default useFetch;
