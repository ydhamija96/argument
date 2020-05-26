import React from 'react';
import {Argument} from './components/Argument';
import {title, propositions} from './data/demo.json';

function App() {
  return (
    <div className="App">
        <Argument title={title} propositions={propositions} />
    </div>
  );
}

export default App;
