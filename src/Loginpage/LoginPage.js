import React, { useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
  useEffect(() => {
    axios.get('/api/login')
      .then(response => {
        // Handle successful response
        console.log('Login data fetched:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching login data:', error);
      });
  }, []);
  return (
    <div>
        LoginPage
    </div>
  );
}

export default LoginPage;
