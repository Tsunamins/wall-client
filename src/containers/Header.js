// will render a logo, conditionally login/signup and
// conditionally logout
import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginForm from '../components/auths/LoginForm'
import SignupForm from '../components/auths/SignupForm'
import Logout from '../components/auths/Logout'

class Header extends React.Component {

  state = {
    showLoginForm: false,
    showSignupForm: false,
  };
  showLogin = e => {
    this.setState({
      showLoginForm: true,
      showSignupForm: false,
    });
  };

  showSignup = e => {
    this.setState({
      showLoginForm: false,
      showSignupForm: true
    });
  };

    render(){
      
      return (
          <div className="Header">
            <div className="Logo"><h1>The Wall</h1></div>
            { this.props.isAuthenticated ?
                <div><Logout /></div>    
        : 
                <div className="AuthLinks">
                      <Link to="/signup" onClick={e => {this.showSignup();}}>Sign Up</Link>
                      <Link to="/login" onClick={e => {this.showLogin();}}>Log In</Link>
                      <SignupForm show={this.state.showSignupForm} />
                      <LoginForm show={this.state.showLoginForm} />
                  
                   
                   
                </div>
        
        }
        </div>
      );
    }
  }
  

  
export default Header;
