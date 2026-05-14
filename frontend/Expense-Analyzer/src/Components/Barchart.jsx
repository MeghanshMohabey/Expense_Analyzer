import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart({ categoryData }) {

  const data = {

    labels: Object.keys(categoryData || {}),


    datasets: [
      {
        label: "Expenses",

        data: Object.values(categoryData || {}),

        backgroundColor: [
          "red",
          "blue",
          "green",
          "orange"
        ],
      },
    ],
  };

  return (
    <Bar data={data} />
  );
}

export default BarChart;