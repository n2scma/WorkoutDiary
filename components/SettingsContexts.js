import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [distanceUnit, setDistanceUnit] = useState('kilometers');

  const updateDistanceUnit = (unit) => {
    setDistanceUnit(unit);
  };

  return (
    <SettingsContext.Provider value={{ distanceUnit, updateDistanceUnit }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
