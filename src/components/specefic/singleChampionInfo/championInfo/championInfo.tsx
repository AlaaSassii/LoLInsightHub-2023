import React, { FC } from 'react'
import CardContainer from '../../../common/cardContainer';
import { info } from '../../../../types/championDataType';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

type championInfoProps = {
    info: info
}
const ChampionInfo: FC<championInfoProps> = ({ info }) => {
    const { attack, defense, difficulty, magic } = info;
    const data = {
        labels: ['attack', 'defense', 'difficulty', 'magic',],
        datasets: [
            {
                label: 'champion info',
                data: [attack, defense, difficulty, magic],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    return (
        <CardContainer loading={false} className='champion__info'>
            <Radar
                data={data}
            />
        </CardContainer>
    )
}

export default ChampionInfo