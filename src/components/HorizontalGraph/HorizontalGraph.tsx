import React, { useEffect, useRef } from 'react';
import './HorizontalGraph.css';

type BarData = {
  value: number;
  label: string;
  color?: string;
};

interface HorizontalGraphProps {
  data: BarData[];
  title?: string;
}

const HorizontalGraph: React.FC<HorizontalGraphProps> = ({ data, title }) => {
  const barsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (barsRef.current) {
      const bars = barsRef.current.querySelectorAll('.HorizontalGraph-bar');
      bars.forEach((bar: any) => {
        const dataWidth = (bar as HTMLElement).getAttribute('data-value');
        if (dataWidth) {
          bar.style.width = `${dataWidth}%`;
        }
      });
    }
  }, [data]);

  return (
    <div>
      {title && <h2>{title}</h2>}
      <div>
        <ul className="HorizontalGraph" ref={barsRef}>
          {data.map((barData, index) => (
            <div>
              <span className="HorizontalGraph-legend">{barData.label}</span>
              <span key={index} className="HorizontalGraph-barBack">
                <li 
                  className="HorizontalGraph-bar" 
                  data-value={barData.value} 
                  style={{ backgroundColor: barData.color }}
                ></li>
              </span>
            </div>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalGraph;
