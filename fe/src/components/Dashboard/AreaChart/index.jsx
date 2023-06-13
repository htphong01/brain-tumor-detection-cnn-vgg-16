import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Positive',
    },
  },
};

const labels = ['Danang', 'Hue', 'Quang Tri', 'Quang Nam', 'Quang Ngai', 'Binh Dinh'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Positive',
      data: [546, 400, 863, 925, 743, 256],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132, 0.5)',
      tension: 0,
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
