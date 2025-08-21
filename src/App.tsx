import { useState } from 'react'

import './App.css'

  function GayButton(){
     return (
    <button>
      I'm a gay
    </button>
  );
}


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Chai - Find Your Cup Of Tea</h1>
      <GayButton />
      <img src="/cupoftea.png" className="logo" alt="couple logo" />
    </>
  )
}

export default App
