import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart({ categoryData }) {

  const labels = Object.keys(categoryData || {});

  const values = Object.values(categoryData || {});

  const data = {

    labels: labels,

    datasets: [
      {
        label: "Monthly Expenses",

        data: values,

        borderColor: "blue",

        backgroundColor: "lightblue",

        tension: 0.4,

        fill: true,
      },
    ],
  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,
  };

  return (

    <div style={{ height: "300px" }}>

      <Line
        data={data}
        options={options}
      />

    </div>

  );
}

export default LineChart;