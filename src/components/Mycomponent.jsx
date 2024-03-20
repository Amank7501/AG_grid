import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mycomponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = 'http://172.16.201.75:8081/api/login';  // Your POST URL
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = `resource=eyJlbWFpbF9pZCI6ImFkbWluQHJhc3AuY29tIiwicGFzc3dvcmQiOiJhZG1pbkAxMjMifQ==`;  // Pre-encoded data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, body, { headers });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array to fetch data only once on component mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Access your fetched data here */}
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default Mycomponent;
