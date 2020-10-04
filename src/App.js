import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TheWall from './containers/TheWall'
import Header from './containers/Header'

class App extends React.Component {

  render(){
    console.log(this.props)

    return (
      <div className="App">
        The App
        <Header {...this.props}/>
        <TheWall {...this.props}/>
      </div>

    );

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  }
}

// export default connect(null, mapDispatchToProps)(App);
export default withRouter(connect(mapStateToProps)(App))

