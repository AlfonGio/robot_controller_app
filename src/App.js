import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleButtonClick = () => {
    fetch('http://localhost:3002/run-script', { method: 'POST' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      try {
        const jsonData = JSON.parse(text);
        console.log('JSON data:', jsonData);
        return jsonData;
      } catch (error) {
        console.error('Failed to parse JSON:', text);
        throw error;
      }
    })
    .then(data => {
      console.log('Script executed successfully:', data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleButtonClick}>
          Run Script
        </button>
      </header>
    </div>
  );
}

export default App;
