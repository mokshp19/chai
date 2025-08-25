import { useState } from 'react'

import './App.css'

let isLoggedIn = true;

  function LoginButton(){
    if (isLoggedIn){
      return (
        <button className = "login">

          Logout
        </button>
      );
    }
    else{
      return (
        <button className = "login">

          Login
        </button>
      );

    }
}


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <LoginButton/>
      <h1>Chai.com</h1>
      <div>
      <h2>find your cup of tea</h2>
      <img src="/cup.png" className="cup" alt="cup logo" />
      </div>
      <div>
      <img src="/couple.png" className="logo" alt="couple logo" />
      <div className="signup">
      <h3>Sign Up</h3>
      <h4>Name</h4>
      <input type="text" placeholder="Name" />
      <h4>Email</h4>
      <input type="text" placeholder="Email" />
      <h4>Password</h4>
      <input type="text" placeholder="Password" />
      <button className = "register">Sign Up</button>
      </div>
     
      
      
      </div>
      

    </>
  )
}

export default App
