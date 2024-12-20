/*import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';

ChartJS.register(CategoryScale);

const AttendancePrediction = () => {
  const [forecast, setForecast] = useState([]);
  const chartRef = React.useRef(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch('/api/attendance/predict');
      const data = await response.json();
      setForecast(data.forecast);
    };
    fetchForecast();
  }, []);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Predicted Attendance',
        data: forecast,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Predicted Attendance</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default AttendancePrediction;*/

