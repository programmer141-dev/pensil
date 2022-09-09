import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './main';

function App() {

  return (
   <div id='app' dark-theme='dark'>
      <BrowserRouter>
        <Main />
     </BrowserRouter>
   </div>
  );
}

export default App;
