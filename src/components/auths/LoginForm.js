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

  if(!props.show){
    return null;
  }
  
  return (
      <div className='authModal'>
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
            <input type="submit" value="Submit" />

    </form>
    </div>
  );
}

export default connect(null, {login})(LoginForm)