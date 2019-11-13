import React from 'react';

//se usa para variables globales
const ThemeContext = React.createContext({
  color: 'dark',
  size: 12
});

export default ThemeContext;