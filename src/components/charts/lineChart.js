import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

function LineChart({ currentWeek, lastWeek }) {
  const [chartData, setChartData] = useState({
    labels: currentWeek,
    datasets: [
      {
        label: 'Current Week',
        data: currentWeek,
        borderColor: 'rgb(99, 102, 241,0.5)',
        backgroundColor: '#6366F1',
      },
      {
        label: 'Last Week',
        data: lastWeek,
        borderColor: 'rgb(203, 213, 225,0.5)',
        backgroundColor: 'rgb(203, 213, 225)',
      },
    ],
  });
  return <Line options={options} data={chartData} />;
}

export default LineChart;
