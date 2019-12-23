import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios.post('https://api.yaz-fr.com/api/login', {
    email:'yazraf4@gmail.com',
    password:'lozyaser_1985'
  })
  return (
    <div className="App">
          <p>TestOOOOOOOOOO</p>
    </div>
  );
}

export default App;
