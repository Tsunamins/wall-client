//will render login form
import React, { useState } from "react";
import { login } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function LoginForm(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  console.log(props)
//   const handleChange = event => {
//     event.target.name(event.target.value)
//   }
  
  const handleSubmit = (event) => {
      event.preventDefault();
    
      const creds = {
        username: username,
        password: password
      }

     props.login(creds)
     props.history.push("/")

  }
  
  return (
      <div className='modal'>
        <Link to="/"><span className='fa fa-close'></span></Link>
        <form onSubmit={handleSubmit}>
            <label>Username</label><br/>
            <input type="text" value={username}
                   
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
            />
            <br/>
            <label>Password</label><br/>
            <input type="password" value={password}
                   
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
            />
            <br/>
            <input className="button" type="submit" value="Submit" />

    </form>
    </div>
  );
}

export default connect(null, {login})(LoginForm)