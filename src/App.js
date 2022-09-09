import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './main';

function App() {
   const [theme, setTheme] = React.useState('dark');

  return (
   <div id='app' dark-theme={theme}>
      <BrowserRouter>
        <Main />
     </BrowserRouter>
   </div>
  );
}

export default App;
