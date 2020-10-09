//will render login form
import React, { useState } from "react";
import { login } from '../../store/actions/authActions'
import { connect } from 'react-redux'

function LoginForm(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
      <div className='LoginForm'>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username}
                   
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
            />
            
            <label>Password</label>
            <input type="password" value={password}
                   
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
            />
 
      <input type="submit" value="Submit" />

    </form>
    </div>
  );
}

export default connect(null, {login})(LoginForm)