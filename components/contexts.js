import React, { createContext, useState, useContext } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    { workoutType: 'Running', distance: '5', duration: '30', date: '2022-7-14', iconName: 'run' },
    { workoutType: 'Skiing', distance: '10', duration: '20', date: '2023-6-12', iconName: 'ski' },
    { workoutType: 'Swimming', distance: '20', duration: '120', date: '2024-1-13', iconName: 'swim' }
  ]);


    const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
  
    const addWorkout = (workout) => {
      setWorkouts([...workouts, workout]);
    };
  
    return (
      <WorkoutContext.Provider value={{ workouts, addWorkout }}>
        {children}
      </WorkoutContext.Provider>
    );
  };

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};
