// will render a logo, conditionally login/signup and
// conditionally logout
import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginForm from '../components/auths/LoginForm'
import SignupForm from '../components/auths/SignupForm'


class Header extends React.Component {

    
  
    render(){
    
      console.log(this.props)
    
      return (
          <div className="Header">
            { this.props.isAuthenticated ?
                <div>Logout feature will go here</div>
                
        : 
                <div>
                    <li><Link to="/signup">Sign Up</Link></li> 
                    <li><Link to="/login">Log In</Link></li>
                    <Route exact path='/signup' component={SignupForm}/>
                    <Route exact path='/login' component={LoginForm}/>
                </div>
        
        }
        </div>
      );
  
    }
  }
  
  const mapStateToProps = state => {
   
    return ({
 
    })
  }
  
export default Header