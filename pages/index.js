import { useState } from 'react';

function Home() {
  return (
    <div>
      <h2>This is my first Counter using NextJS and Vercel!</h2>
      <Counter />
    </div>
  )
}

function Counter() {
  const [counter,setCounter] = useState(1);

  function addCounter() {
    setCounter(counter+1);
  }

  function subCounter() {
    setCounter(counter-1);
  }

  return (
    <div>
      <div>{`My value is: ${counter}`}</div>
      <button onClick={addCounter}>Add +1</button>
      <button onClick={subCounter}>Sub -1</button>
    </div>
  )
}

export default Home;