import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './AppState';
import AppEffect from './AppEffect'

function App() {
  const [isShowing, setIsShowing] = useState(true)

  const stopShowing = () => {
    setIsShowing(false)
  }

  return (
    <>
      {isShowing && <AppEffect />}
      <button onClick={stopShowing}>Stop Showing</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
