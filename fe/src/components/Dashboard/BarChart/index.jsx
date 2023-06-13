import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Positive and Negative with Age",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const labels = ["0-5", "6-14", "15-18", "19-64", ">=65"];
const data = {
  labels,
  datasets: [
    {
      label: "Positive",
      data: [241, 370, 768, 798, 949],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Negative",
      data: [585, 924, 744, 228, 89],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    }
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
