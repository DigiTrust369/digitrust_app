"use client"
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFFFFF'];

const ColorfulPieChart = (data:any) => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry:any, index:any) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ColorfulPieChart;