//will render signup form
//will render login form
import React, { useState } from "react";

function Signup(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")


  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitting login to eventually call action')
     
  }
 
  return (
      <div className='SignupForm'>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username}
                   
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
            />
            <label>Email</label>
            <input type="email" value={email}
                   
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
            />
            <label>Password</label>
            <input type="password" value={password1}
                   
                    onChange={e => setPassword1(e.target.value)}
                    placeholder='Password'
            />
            <label>Confirm Password</label>
            <input type="password" value={password2}
                   
                    onChange={e => setPassword2(e.target.value)}
                    placeholder='Enter same password'
            />
 
      <input type="submit" value="Submit" />

    </form>
    </div>
  );
}

export default Signup