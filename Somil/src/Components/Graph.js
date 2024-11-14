import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data }) => {
  // Prepare data for the line chart
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Number of Projects',
        data: data.map(item => item.projects),
        fill: false,
        borderColor: '#4bc0c0',
        backgroundColor: '#4bc0c0',
        pointBackgroundColor: '#4bc0c0',
        pointBorderColor: '#4bc0c0',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Projects per Month',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Projects',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Graph;
