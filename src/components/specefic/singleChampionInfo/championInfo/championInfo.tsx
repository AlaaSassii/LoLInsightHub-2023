import React, { FC } from 'react'
import CardContainer from '../../../common/cardContainer';
import { PolarArea } from 'react-chartjs-2';
import { info } from '../../../../types/championDataType';
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
ChartJs.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
);
const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
};
type championInfoProps = {
    info: info
}
const ChampionInfo: FC<championInfoProps> = ({ info }) => {
    const { attack, defense, difficulty, magic } = info;
    const data = {
        datasets: [
            {
                data: [attack, defense, difficulty, magic],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],
        labels: ['Attack', 'Defense', 'Difficulty', 'Magic'],
    };
    return (
        <CardContainer loading={false}>
            <PolarArea
                data={data}
                options={chartOptions as any}
            />
        </CardContainer>
    )
}

export default ChampionInfo