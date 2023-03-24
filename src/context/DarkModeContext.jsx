import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext('null');
 
export function DarkModeProvider({chlidren}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {chlidren}
    </DarkModeContext.Provider>
    );
}