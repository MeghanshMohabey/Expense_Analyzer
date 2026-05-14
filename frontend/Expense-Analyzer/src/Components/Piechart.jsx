import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ categoryData }) {
  const data = {
    labels: Object.keys(categoryData || {}),

    datasets: [
      {
        data: Object.values(categoryData || {}),

        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#4bc0c0",
          "#ffce56",
          "#9966ff",
          "#ff9f40",
          "#66ff66",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },

      labels: {
        color: "#64748b",
      },
    },

    cutout: "65%",
  };
  grid: {
    color: "#f1f5f9";
  }

  return (
    <div style={{ height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;
