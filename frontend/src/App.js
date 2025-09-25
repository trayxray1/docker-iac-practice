import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/health');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to IaC Practice!</h1>
      <h2>Frontend (React)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Backend Status: {data ? data.status : 'Error'}</p>
          <p>Message: {data ? data.message : 'No data'}</p>
        </div>
      )}
     </div>
  );
}
