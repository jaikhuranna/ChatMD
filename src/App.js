//create componenet

import React, { useState } from "react";
import './App.css';

function App(){
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('http://localhost:3001/',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      bosy: JSON.stringify({message}),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return(
    <div classname="App">
      <from onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}>

          </textarea>
          <button type="submit"> Submit</button>
      </from>
      <div>{response}</div>
    </div>
  );
}

export default App