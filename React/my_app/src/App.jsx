import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Clock from "./Clock";
import Counter from "./2";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Counter />
    // <center>
    //   <h1>{count}</h1>
    //   <button onClick={() => setCount((count)=>count + 1)}>Count +</button>
    //   <button onClick={() => setCount((count)=>count - 1)}>Count -</button>
    //   <button onClick={() => setCount((count)=>0)}>Reset</button>
    // </center>
  )
}

export default App
