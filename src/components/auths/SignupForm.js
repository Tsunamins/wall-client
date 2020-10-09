//will render signup form
//will render login form
import React, { useState } from "react";
import { signup } from '../../store/actions/authActions'
import { connect } from 'react-redux'

function SignupForm(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")


  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitting signup to eventually call action')
        console.log(props)
      const creds = {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      }
      
      props.signup(creds)
      props.history.push("/")
     
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

export default connect(null, {signup})(SignupForm)