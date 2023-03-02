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
    },
  },
};

function OrderValueChart({ values }) {
  const [chartData, setChartData] = useState({
    labels: values,
    datasets: [
      {
        data: values,
        borderColor: 'rgb(99, 102, 241,0.5)',
        backgroundColor: '#6366F1',
      },
    ],
  });
  return <Line options={options} data={chartData} />;
}

export default OrderValueChart;
