// src/App.js
import React from 'react';
import MqttReceiver from './exibe'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MqttReceiver />
      </header>
    </div>
  );
}

export default App;