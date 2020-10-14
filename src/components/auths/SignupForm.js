//will render signup form
//will render login form
import React, { useState } from "react";
import { signup } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SignupForm(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const handleSubmit = (event) => {
      event.preventDefault();
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
      <div className='modal'>
        <Link to="/"><span className='fa fa-close x-button'></span></Link>     
        <form onSubmit={handleSubmit}>
            <label>Username</label><br/>
            <input type="text" 
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   placeholder='Username'
            />
            
            <br/>
            <label>Email</label><br/>
            <input type="text"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   placeholder='Email'
            />
            
            <br/>
            <label>Password</label><br/>
            <input type="password"
                   value={password1}
                   onChange={e => setPassword1(e.target.value)}
                   placeholder='Password'
            />
            
            <br/>
            <label>Confirm Password</label><br/>
            <input type="password"
                   value={password2}
                   onChange={e => setPassword2(e.target.value)}
                   placeholder='Enter same password'
            />

            <br/>
            <input className="button" type="submit" value="Submit" />

        </form>
    </div>
  );
}

export default connect(null, {signup})(SignupForm)