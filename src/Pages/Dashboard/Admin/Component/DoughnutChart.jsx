import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './Admin_home.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: "",
  datasets: [
    {
      data: [12, 19, 10],
      backgroundColor: ["#d44b39", "gainsboro", "teal"],
      borderColor: ["#d44b39", "gainsboro", "teal"],
      cutoutPercentage: 90,
    },
  ],
};

export function DoughnutChart() {
  return   <Doughnut  data={data} />

   

   
}
