import { useEffect, useState } from "react";
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          const data = response.data.results;
          console.log(data);
          setData(data);
        } catch (err) {
          console.log("error fetching data", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  }, [url]);

  

  return { data, error, loading };
};

export default useApi;