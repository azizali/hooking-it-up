import React, { useState } from 'react';

function App() {
  // this.state = {
  //   counter: 0,
  //   isLoading:,
  //   tasks: []
  // }

  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState({})

  const handleClick = (e) => {
    setCounter(counter + 1)
  }

  return (
    <div>
      hello world
      {counter}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App;
