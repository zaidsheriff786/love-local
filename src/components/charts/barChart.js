import React, { useState } from 'react';
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
};

function BarChart({ revenue }) {
  const [chartData, setChartData] = useState({
    labels: revenue?.map((item) => moment(item.month).format('MMM YY')),
    datasets: [
      {
        label: 'Direct',
        data: revenue.map((item) => item.direct),
        backgroundColor: '#6366F1',
      },
      {
        label: 'Indirect',
        data: revenue.map((item) => item.indirect),
        backgroundColor: '#38BDF8',
      },
    ],
  });

  return <Bar options={options} data={chartData} />;
}

export default BarChart;
