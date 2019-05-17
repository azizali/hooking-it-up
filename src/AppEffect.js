import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // USE EFFECT = pass nothing, runs after every render
  // USE EFFECT = componentDidMount []
  // USE EFFECT = componentDidMount + didUpdate [select]

  useEffect(() => {
    console.log('Hi')
    // madecall(counter)
    return () => {
      // cancelPreveiousCall
      console.log('I am gone')
    }
  }, [isLoading, counter])

  useEffect(() => {
    console.log('Counting')
  }, [counter])

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const doneLoading = () => {
    setIsLoading(!isLoading)
  }

  return (
    <div>
      Hello world
      {counter}
      <button onClick={handleClick}>Click</button>
      <button onClick={doneLoading}>Done loading</button>
    </div>
  )
}

export default App;
