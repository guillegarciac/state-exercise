import React, {useState}  from 'react'

const Switch = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');

  const lightTheme = () => {
    setCounter(counter + 1);
    setTheme('light')
  }

  const darkTheme = () => {
    setCounter(counter + 1);
    setTheme('dark')
  }

  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed: {counter} </h4>
      <button onClick={lightTheme}>Light Mode</button>
      <button onClick={darkTheme}>Dark Mode</button>
    </div>
  )
}

export default Switch;
