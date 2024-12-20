/*import React, { useEffect, useState } from 'react';

const WorkoutRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await fetch('/api/workout/recommendations');
      const data = await response.json();
      setRecommendations(data.recommendations);
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Workout Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutRecommendation;*/
