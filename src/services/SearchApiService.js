import { useState } from "react";
import axios from 'axios';

const useSearchApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const responseData = response.data;
      setData(responseData);
      //console.log('Data from search API:', responseData);
      return { data: responseData, error: null, loading: false }; 
    } catch (err) {
      //console.log("Error fetching data:", err);
      setError(err);
      return { data: null, error: err, loading: false }; 
    } finally {
      setLoading(false);
    }
  };
  

  return { data, error, loading, fetchData };
};

export default useSearchApi;
