import React, { useEffect, useRef } from 'react';

const SpiderChart: React.FC<{
    data: number[];
    labels: string[];
    maxScale: number;
}> = ({ data, labels, maxScale }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const centerX = 150; // Adjust as needed
    const centerY = 150; // Adjust as needed
    const radius = 100; // Adjust as needed
    const sides = data.length;

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;

        // Clear any previous content
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        // Draw the polygon lines
        const polygonPoints = data
            .map((value, index) => {
                const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
                const x = centerX + radius * (value / maxScale) * Math.cos(angle);
                const y = centerY + radius * (value / maxScale) * Math.sin(angle);
                return `${x},${y}`;
            })
            .join(' ');

        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', polygonPoints);
        polygon.setAttribute('fill', 'rgba(0, 0, 255, 0.2)'); // Adjust color and opacity
        polygon.setAttribute('stroke', 'blue'); // Adjust the stroke color
        svg.appendChild(polygon);

        // Draw the lines connecting the center to the data points
        data.forEach((value, index) => {
            const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centerX.toString());
            line.setAttribute('y1', centerY.toString());
            line.setAttribute('x2', x.toString());
            line.setAttribute('y2', y.toString());
            line.setAttribute('stroke', 'blue'); // Adjust the line color
            svg.appendChild(line);
        });
    }, [data, maxScale]);

    return (
        <svg width={300} height={300} ref={svgRef}>
            {/* Add labels */}
            {labels.map((label, index) => {
                const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
                const x = centerX + (radius + 10) * Math.cos(angle); // Adjust label position
                const y = centerY + (radius + 10) * Math.sin(angle); // Adjust label position
                return (
                    <text key={index} x={x} y={y} textAnchor="middle" alignmentBaseline="middle">
                        {label}
                    </text>
                );
            })}
        </svg>
    );
};

export default SpiderChart;
