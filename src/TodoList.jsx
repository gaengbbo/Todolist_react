import React, { useState } from 'react';
import Header from './Header';
import './TodoList.css';
import Main from './Main';
import { DarkModeContext } from './context/DarkModeContext';

export default  function TodoList () {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkModeContext.Provider value={{isDark,setIsDark}}>
      <div id='wrap'>
        <Header />
        <Main />
      </div>
    </DarkModeContext.Provider>
  );
}