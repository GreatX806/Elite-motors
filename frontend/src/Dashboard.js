import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    // Fetch workouts from the API
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts/');
      const data = await response.json();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/workouts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        exercise,
        duration,
        calories_burned: calories,
        date: new Date().toISOString().split('T')[0],
      }),
    });
    const newWorkout = await response.json();
    setWorkouts([...workouts, newWorkout]);
    setExercise('');
    setDuration('');
    setCalories('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button type="submit">Add Workout</button>
      </form>
      <h2>My Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.date}: {workout.exercise} - {workout.duration} minutes, {workout.calories_burned} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
