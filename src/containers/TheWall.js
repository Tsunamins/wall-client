//will render the message list component
import React from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../store/actions/messageActions'





class TheWall extends React.Component {
    componentDidMount(){
        this.props.getMessages();
      }

     
    render(){
        console.log(this.props)
     

    
   
      return (
        <div className="TheWall">
            ---The Wall---
        </div>
      );
  
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getMessages: () => dispatch(getMessages())
    }
  }
  
  export default connect(null, mapDispatchToProps)(TheWall);

