import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TheWall from './containers/TheWall'
import Header from './containers/Header'
import { getCurrentUser } from './store/actions/authActions'

class App extends React.Component {
  componentDidMount(){
    this.props.getCurrentUser()
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

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))

