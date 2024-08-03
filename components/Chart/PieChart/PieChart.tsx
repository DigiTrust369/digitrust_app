import { Skeleton } from "@nextui-org/react";
import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface IPieChartProp {
  data?: any;
  colors?: string[];
  logoUrl?: string;
}

const dataDemo = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
  { name: "Group F", value: 200 },
];

const COLORS = [
  "#F87171",
  "#60A5FA",
  "#818CF8",
  "#FBBF24",
  "#F472B6",
  "#3B82F6",
];

const PieChartCustom = (props: IPieChartProp) => {
  const { data = dataDemo, colors = COLORS, logoUrl = "https://example.com/default-logo.png" } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const onPieClick = (_: any, index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const ActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <g>
        <path
          d={`M ${cx},${cy} L ${cx},${cy - outerRadius} A ${outerRadius},${outerRadius} 0 0 1 ${cx + Math.sin(endAngle) * outerRadius},${cy - Math.cos(endAngle) * outerRadius} Z`}
          fill={fill}
          stroke="none"
        />
      </g>
    );
  };

  return (
    <div>
      {props.data != null && props.data.length > 0?
      <div style={{ position: 'relative', width: 220, height: 220 }}>
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            cx={110}
            cy={110}
            innerRadius={80}
            outerRadius={105}
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            stroke="none"
            activeShape={ActiveShape}
            onClick={onPieClick}
          >
           {data.map((entry: any, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke={clickedIndex === index ? "none" : "#fff"}
              strokeWidth={2}
            />
          ))}
          </Pie>
        </PieChart>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80,
            height: 80,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          {
            props.data.length >0 &&
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              className="ml-3"
          />}
        </div>
        {activeIndex !== null && (
          <div
            style={{
              position: 'absolute',
              top: '68%',
              left: '52%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {`${data[activeIndex].name}: ${data[activeIndex].value}`}
          </div>
        )}
      </div>:
        <div>
          <div className="w-full flex items-center gap-3">
            <Skeleton className="rounded-full">
              <div className="flex rounded-full w-48 h-48 bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      }
    </div>
  );
};

export default PieChartCustom;