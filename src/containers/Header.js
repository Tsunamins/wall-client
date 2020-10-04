// will render a logo, conditionally login/signup and
// conditionally logout
import React from 'react'
import { Link, Route } from 'react-router-dom'
import Login from '../components/auths/Login'
import Signup from '../components/auths/Signup'


class Header extends React.Component {

    
  
    render(){
    
      console.log(this.props)
    
      return (
        <div className="Header">
            <li><Link to="/signup">Sign Up</Link></li> 
            <li><Link to="/login">Log In</Link></li>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>

        </div>
      );
  
    }
  }
  
  const mapStateToProps = state => {
   
    return ({
 
    })
  }
  
export default Header