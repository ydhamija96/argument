import React from 'react';
import {Argument} from './Argument';
import {PropositionT} from './types';

const propositions : PropositionT[] = [
    {
        "id": "25e5131a-63de-4e3c-878a-95e8f54b545f",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices" : [
            {
                "id": "",
                "text": "True",
                "timesChosen": 8
            },
            {
                "id": "",
                "text": "False",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            },
        ]
    }
];

function App() {
  return (
    <div className="App">
        <Argument propositions={propositions} />
    </div>
  );
}

export default App;
