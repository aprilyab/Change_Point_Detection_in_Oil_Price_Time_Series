// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchPriceData, fetchChangePoints, fetchEvents } from '../api';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const [priceData, setPriceData] = useState([]);
  const [changePoints, setChangePoints] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchPriceData().then(setPriceData);
    fetchChangePoints().then(setChangePoints);
    fetchEvents().then(setEvents);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={priceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />

        <Line type="monotone" dataKey="Price" stroke="#8884d8" dot={false} />

        {changePoints.map(cp => (
          <ReferenceLine
            key={cp.Change_Point_Date}
            x={cp.Change_Point_Date}
            stroke="red"
            label={{ value: 'Change Point', position: 'top', fill: 'red' }}
            strokeDasharray="3 3"
          />
        ))}

        {/* You can add event markers or tooltips here */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Dashboard;
