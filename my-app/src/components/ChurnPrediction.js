/*import React, { useEffect, useState } from 'react';

const ChurnPrediction = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      const response = await fetch('/api/members/churn-predict');
      const data = await response.json();
      setPredictions(data.predictions);
    };
    fetchPredictions();
  }, []);

  return (
    <div>
      <h2>Churn Predictions</h2>
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>{prediction}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChurnPrediction;*/
