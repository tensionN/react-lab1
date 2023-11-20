import React from 'react';
import DayNightToggle from 'react-day-and-night-toggle';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

const DayNight = () => {
  return (
  <ThemeContext.Consumer>
    {({theme, setTheme}) => (
      <DayNightToggle
         onChange={() => {
          if (theme === themes.light) setTheme(themes.dark)
          if (theme === themes.dark) setTheme(themes.light)
         }}
         checked={theme === themes.dark}
       />
    )}
  </ThemeContext.Consumer>
  );
};

export default DayNight;