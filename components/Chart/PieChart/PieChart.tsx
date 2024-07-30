import React from "react";
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

  return (
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
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 60,
          height: 60,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white', // Optional: adds a white background behind the logo
        }}
      >
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

export default PieChartCustom;