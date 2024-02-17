import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function BudgetPage() {
  const [budgetData, setBudgetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch budget data from the JSON file
    axios.get('/budgetData.json') // Assuming `budgetData.json` is in the public directory
      .then(response => {
        // Store the fetched data in state
        setBudgetData(response.data.myBudget);
        setLoading(false); // Data has been loaded successfully
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching budget data:', error);
        setError(error); // Set error state
        setLoading(false); // Data fetching failed
      });
  }, []);

  useEffect(() => {
    // Render the pie chart when budgetData is available
    if (budgetData) {
      renderPieChart();
    }
  }, [budgetData]);

  const renderPieChart = () => {
    const ctx = document.getElementById('budgetChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: budgetData.map(item => item.title),
          datasets: [{
            label: 'Budget Distribution',
            data: budgetData.map(item => item.budget),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
        },
      });
    }
  };

  return (
    <div>
      <h1>Budget Page</h1>
      {loading ? (
        <p>Loading budget data...</p>
      ) : error ? (
        <p>Error fetching budget data. Please try again later.</p>
      ) : budgetData ? (
        <div>
          <h2>Budget Data</h2>
          <ul>
            {budgetData.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: ${item.budget}
              </li>
            ))}
          </ul>
          <canvas id="budgetChart" width="400" height="400"></canvas>
        </div>
      ) : null}
    </div>
  );
}

export default BudgetPage;
