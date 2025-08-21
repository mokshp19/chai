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
      <h1>Chai.com</h1>
      <div>
      <h2>find your cup of tea</h2>
      <img src="/cup.png" className="cup" alt="cup logo" />
      </div>
      <GayButton />
      <div>
      <img src="/couple.png" className="logo" alt="couple logo" />
      <div className="signup">
      <h3>Sign Up</h3>
      <h4>Name</h4>
      <h4>Phone Number</h4>
      <h4>Email</h4>
      </div>
      </div>
      

    </>
  )
}

export default App
