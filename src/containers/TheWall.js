//will render the message list component
import React from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../store/actions/messageActions'
import Messages from '../components/messages/Messages'

class TheWall extends React.Component {
    componentDidMount(){
        this.props.getMessages();
      }

    render(){
        console.log(this.props.messages)
     
        return (
            <div className="TheWall">
                ---The Wall---
                <Messages {...this.props} />
            </div>
        );
  
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      getMessages: () => dispatch(getMessages())
    }
  }

  const mapStateToProps = state => {
      return {
          messages: state.messageReducer
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TheWall);

