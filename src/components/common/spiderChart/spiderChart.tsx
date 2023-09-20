import React, { useEffect, useRef } from 'react';
import './spiderChart.scss';
interface SpiderChartProps {
    data: number[];
    categories: string[];
}

const SpiderChart: React.FC<SpiderChartProps> = ({ data, categories }) => {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const maxValue = Math.max(...data);

            const chartContainer = chartRef.current;
            chartContainer.innerHTML = '';

            categories.forEach((category, index) => {
                const dataValue = data[index];
                const dataPercentage = (dataValue / maxValue) * 100;

                const chartItem = document.createElement('div');
                chartItem.classList.add('chart-item');
                chartItem.style.width = `${dataPercentage}%`;

                const label = document.createElement('div');
                label.textContent = category;
                label.classList.add('chart-label');

                chartItem.appendChild(label);
                chartContainer.appendChild(chartItem);
            });
        }
    }, [data, categories]);

    return <div className="spider-chart" ref={chartRef}></div>;
};

export default SpiderChart;
