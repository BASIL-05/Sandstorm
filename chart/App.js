import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  // Convert string values to numeric data (you may need to customize this based on your ML model output)
  const numericData = data.map((value) => parseFloat(value));

  // Chart.js data
  const chartData = {
    labels: data,
    datasets: [
      {
        label: 'String Data Bar Chart',
        data: numericData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
