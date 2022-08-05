import { useEffect, useState } from 'react';

function useJsonFetch(url, options = '') {
  const [data, setData] = useState({
    data: {},
    error: '',
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + options);
        if (response.status >= 200 && response.status < 300) {
          const data = await response.json();
          setData((prevData) => ({ ...prevData, loading: false, data: data }));
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        setData((prevData) => ({
          ...prevData,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchData();
  }, [url, options]);

  return Object.values(data);
}

export default useJsonFetch;
