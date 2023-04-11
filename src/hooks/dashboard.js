import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const useDashBoard = (filterToMiriam, filterToLorena, reservation) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = ["Ganancias Totales"];
  const data = {
    labels,
    datasets: [
      {
        label: "Miriam",
        data: labels.map(() => filterToMiriam),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Lorena",
        data: labels.map(() => filterToLorena),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const dataPie = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: reservation.reduce((previous, current) => {
          return previous + current.status;
        }, 0),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return {
    options,
    data,
    dataPie,
  };
};
