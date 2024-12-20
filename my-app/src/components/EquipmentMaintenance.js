/*import React, { useEffect, useState } from 'react';

const EquipmentMaintenance = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      const response = await fetch('/api/equipment/maintenance-predict');
      const data = await response.json();
      setPredictions(data.predictions);
    };
    fetchPredictions();
  }, []);

  return (
    <div>
      <h2>Equipment Maintenance Predictions</h2>
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>{prediction}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentMaintenance;*/
