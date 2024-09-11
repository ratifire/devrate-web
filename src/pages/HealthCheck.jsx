import React, { useEffect, useState } from 'react';

const HealthCheck = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    // You can add more checks here if you want to check external services (e.g., API health)
    setStatus('App is Healthy');
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <p>Status: {status}</p>
    </div>
  );
};

export default HealthCheck;
