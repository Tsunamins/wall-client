// will render a logo, conditionally login/signup and
// conditionally logout
import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginForm from '../components/auths/LoginForm'
import SignupForm from '../components/auths/SignupForm'
import Logout from '../components/auths/Logout'

class Header extends React.Component {
    render(){
      return (
          <div className="Header">
            { this.props.isAuthenticated ?
                <div><Logout /></div>    
        : 
                <div>
                    <div className="Logo"><h1>The Wall</h1></div>
                    <div className="SignInLinks">
                      <li><Link to="/signup">Sign Up</Link></li> 
                      <li><Link to="/login">Log In</Link></li>
                    </div>
                    <Route exact path='/signup' component={SignupForm}/>
                    <Route exact path='/login' component={LoginForm}/>
                </div>
        
        }
        </div>
      );
    }
  }
  

  
export default Header;
