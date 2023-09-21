import React, { useEffect, useRef } from 'react';

const SpiderChart: React.FC<{
    data: number[];
    labels: string[];
    maxScale: number;
}> = ({ data, labels, maxScale }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    const sides = data.length;

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;

        // Clear previous content
        svg.innerHTML = '';

        const drawPolygon = () => {
            const points = data.map((value, index) => {
                const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
                const x = centerX + radius * (value / maxScale) * Math.cos(angle);
                const y = centerY + radius * (value / maxScale) * Math.sin(angle);
                return `${x},${y}`;
            }).join(' ');

            const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            polygon.setAttribute('points', points);
            polygon.setAttribute('fill', 'rgba(0, 0, 255, 0.2)');
            polygon.setAttribute('stroke', 'blue');
            svg.appendChild(polygon);
        };

        const drawLines = () => {
            data.forEach((_, index) => {
                const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', centerX.toString());
                line.setAttribute('y1', centerY.toString());
                line.setAttribute('x2', x.toString());
                line.setAttribute('y2', y.toString());
                line.setAttribute('stroke', 'blue');
                svg.appendChild(line);
            });
        };

        drawPolygon();
        drawLines();
    }, [data, maxScale]);

    return (
        <svg width={300} height={300} ref={svgRef}>
            {labels.map((label, index) => {
                const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
                const x = centerX + (radius + 20) * Math.cos(angle); // Adjust label position
                const y = centerY + (radius + 20) * Math.sin(angle); // Adjust label position

                return (
                    <text key={index} x={x} y={y} textAnchor="middle" alignmentBaseline="middle" fill="black">
                        {label}
                    </text>
                );
            })}
        </svg>
    );
};

export default SpiderChart;
