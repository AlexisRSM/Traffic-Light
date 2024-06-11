import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrafficLight from './modules/TrafficLight'
import './modules/Styles/TrafficLight.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLight />
    </>
  )
}

export default App
