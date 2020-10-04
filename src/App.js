import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { getMessages } from './store/actions/postActions'

class App extends React.Component {

  componentDidMount(){
    this.props.getMessages();

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    allMessages: allMessages,
  })
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(actions.getMessages())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
