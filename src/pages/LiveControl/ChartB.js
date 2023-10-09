import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

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
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 8,
                    color: "#606060",
                },
            },
            border: {
                color: "#333",
            },
            gridLines: {
                color: "#efefef",
            },
        },

        y: {
            border: {
                color: "#333",
            },
            ticks: {
                // y축의 label 이 10 단위로
                stepSize: 10,
                font: {
                    size: 8,
                    color: "#606060",
                },
            },
            gridLines: {
                color: "#efefef",
            },
        },
    },
};

const labels = ["2018", "2019", "2020", "2021", "2022"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [25, 12, 3, 34, 19, 6],
            borderColor: "#678de6",
            backgroundColor: "#678de6",
        },
        {
            label: "Dataset 2",
            data: [12, 3, 4, 15, 24, 3],
            borderColor: "#fcc355",
            backgroundColor: "#fcc355",
        },
    ],
};
function ChartB() {
    const ChartBox = styled.div`
        width: 100%;
        height: 22rem;
        padding: 1rem;
    `;
    return (
        <ChartBox>
            <Line options={options} data={data} height={240} />
        </ChartBox>
    );
}
export default ChartB;
