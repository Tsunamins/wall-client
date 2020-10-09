//will render the message list component
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMessages } from '../store/actions/messageActions'
import { getCurrentUser } from '../store/actions/authActions'
import Messages from '../components/messages/Messages'
import ViewMessage from '../components/messages/ViewMessage'
import EditMessage from '../components/messages/EditMessage'
import CreateMessage from '../components/messages/CreateMessage'


class TheWall extends React.Component {
    componentDidMount(){
        this.props.getMessages();
        this.props.getCurrentUser();
      }

    render(){
        return (
            <div className="TheWall">
                ---The Wall---
                <Messages {...this.props} />

                <Route exact path='/messages/:id' render={props => {
                    const message = this.props.messages.find(element => element.id.toString() === props.match.params.id)
                    return <ViewMessage message={message} {...props}/>
                        }
                    }/>
                <Route exact path='/messages/:id/edit' render={props => {
                    const message = this.props.messages.find(element => element.id.toString() === props.match.params.id)
                    return <EditMessage message={message} {...props}/>
                        }
                }/>

                <CreateMessage {...this.props } />

            </div>
        );
  
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      getMessages: () => dispatch(getMessages()),
      getCurrentUser: () => dispatch(getCurrentUser())
    }
  }

  const mapStateToProps = state => {
      return {
          messages: state.messageReducer
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TheWall);

