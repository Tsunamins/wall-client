import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TheWall from './containers/TheWall'
import Header from './containers/Header'
import { getCurrentUser } from './store/actions/authActions'
import { checkToken } from './store/actions/authActions'

class App extends React.Component {
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.checkToken()
  }

  render(){
    return (
      <div className="App">
        <Header {...this.props}/>
        <TheWall {...this.props}/>
      </div>

    );

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    currentUser: state.authReducer.current

  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    getCurrentUser: () => dispatch(getCurrentUser()),
    checkToken: () => dispatch(checkToken())

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

