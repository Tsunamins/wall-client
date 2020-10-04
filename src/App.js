import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { getMessages } from './store/actions/messageActions'

class App extends React.Component {

  componentDidMount(){
    this.props.getMessages();

  }

  render(){
    console.log(this.state)
    console.log(this.props)

    return (
      <div className="App">
        The App
      </div>
    );

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(getMessages())
  }
}

export default connect(null, mapDispatchToProps)(App);

