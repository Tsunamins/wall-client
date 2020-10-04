import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TheWall from './containers/TheWall'
import Header from './containers/Header'

class App extends React.Component {

//   componentDidMount(){
//     this.props.getMessages();

//   }

  render(){
    console.log(this.state)
    console.log(this.props)

    return (
      <div className="App">
        The App
        <Header />
        <TheWall />
        
      </div>
    );

  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     
//   }
// }

// export default connect(null, mapDispatchToProps)(App);
export default withRouter(App)

