import React, { useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';


function HomePage() {
   
    useEffect(() => {
        // Fetch data from backend using Axios for Chart.js
        axios.get('/api/data')
          .then(response => {
            // Handle successful response
            console.log('Data fetched:', response.data);
    
            // Render Chart.js chart
            renderChart(response.data);
            // Render pie chart
            renderPieChart(response.data);
          })
          .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
          });

        // Render D3.js chart
        renderD3Chart();
    }, []);

    const renderChart = (data) => {
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [{
            label: 'Budget Data',
            data: Object.values(data),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        }
      });
    };

    const renderPieChart = (data) => {
      const ctx = document.getElementById('myPieChart');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(data),
          datasets: [{
            label: 'Budget Data',
            data: Object.values(data),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      });
    };

    const renderD3Chart = () => {
      const data = [30, 86, 168, 281, 303, 365];
      const svgWidth = 500;
      const svgHeight = 300;
      const barPadding = 5;
      const barWidth = svgWidth / data.length;

      const svg = d3.select('#d3Chart')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

      const bars = svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', d => svgHeight - d)
        .attr('height', d => d)
        .attr('width', barWidth - barPadding)
        .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)
        .style('fill', 'orange');
    };

       return (
    <main className="center" id="main">
        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Pie Chart</h1>
                <canvas id="myPieChart" width="400" height="400"></canvas>
            </article>


            <article>
                <h1>D3.js Chart</h1>
                <div id="d3Chart"></div>
            </article>

        </div>

    </main>
  );
}

export default HomePage;
