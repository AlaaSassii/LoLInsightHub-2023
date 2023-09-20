import React, { useEffect, useRef } from 'react';
import './spiderChart.scss'
interface SpiderChartProps {
    data: number[];
    categories: string[];
}

const SpiderChart: React.FC<SpiderChartProps> = ({ data, categories }) => {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartContainer = chartRef.current;
            chartContainer.innerHTML = '';

            // Create the spider chart container
            const spiderChart = document.createElement('div');
            spiderChart.classList.add('spider-chart');
            chartContainer.appendChild(spiderChart);

            // Create the chart content using a table structure
            const table = document.createElement('table');
            table.classList.add('spider-table');
            spiderChart.appendChild(table);

            // Create rows for categories and data points
            categories.forEach((category, index) => {
                const row = document.createElement('tr');

                // Category label cell
                const labelCell = document.createElement('td');
                labelCell.classList.add('category-label');
                labelCell.textContent = category;
                row.appendChild(labelCell);

                // Data point cell
                const dataCell = document.createElement('td');
                dataCell.classList.add('data-point');
                dataCell.style.width = `${(data[index] / 60) * 100}%`; // Scale data points
                dataCell.textContent = `${data[index]}%`;
                row.appendChild(dataCell);

                table.appendChild(row);
            });
        }
    }, [data, categories]);

    return <div className="spider-chart" ref={chartRef}></div>;
};

export default SpiderChart;
