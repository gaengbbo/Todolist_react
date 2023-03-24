import React, { useContext, useState } from 'react';
import './TodoList.css';
import { FaSun } from "react-icons/fa";
import { DarkModeContext } from './context/DarkModeContext';


export default function Header () {
  const [clicked, setClicked] = useState(false);
  const {isDark, setIsDark} = useContext(DarkModeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  const toggleClicked = () => {
    setClicked(!clicked);
  };


  return (
    <div id="header_wrap" 
      style={{
        backgroundColor: isDark ? '#303059' : '#bbbbc9'}}>
      <div id="header_content">
        <button id="darkMode" onClick={toggleTheme}><FaSun /></button>
        <div id="header_filter_wrap">
          <span className='header_filter' id="filter_all" 
              style={{
                color: isDark ? '#bbbbc9' : '#303059',
                backgroundColor: clicked ? 'grey' : 'none'}} 
              onClick={toggleClicked}
              >All</span>
          <span className='header_filter' id="filter_action"
              style={{color: isDark ? '#bbbbc9' : '#303059',
              backgroundColor: clicked ? 'grey' : 'none'}}>Action</span>
          <span className='header_filter' id="filter_completed"
              style={{color: isDark ? '#bbbbc9' : '#303059'}}>Completed</span>
        </div>
      </div>
    </div>
  );
}
