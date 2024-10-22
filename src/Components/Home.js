import React, { useState } from 'react';

function Home() {
  const [message, setMessage] = useState("Click the button to change me!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;