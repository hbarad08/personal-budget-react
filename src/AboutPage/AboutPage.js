import React, { useEffect } from 'react';
import axios from 'axios';

function AboutPage() {
  useEffect(() => {
    axios.get('/api/about')
      .then(response => {
        // Handle successful response
        console.log('About data fetched:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching about data:', error);
      });
  }, []);
  
  return (
    <div>
        AboutPage
    </div>
  );
}

export default AboutPage;
