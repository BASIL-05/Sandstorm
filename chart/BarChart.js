import React, { useState } from 'react';
import BarChart from './BarChart';

function App() {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddData = () => {
    if (userInput.trim() !== '') {
      setData([...data, userInput]);
      setUserInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter a string value"
      />
      <button onClick={handleAddData}>Add Data</button>
      <BarChart data={data} />
    </div>
  );
}

export default App;
