//will render message itself along with the 
//User it belongs to
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteMessage } from '../../store/actions/messageActions'

class ViewMessage extends React.Component {

  
  handleDelete = () => {
   
    this.props.deleteMessage(this.props.message.id)
    this.props.history.push("/messages")
  }

  render(){
    console.log(this.props)

    let message = this.props.message || null
  


     
  return(
    
    message ?
      <div className="modal">
        <Link to="/"><span className='fa fa-close'></span></Link>
        <p>{message.content} </p>
        <p>{message.user}</p>

        <div>
          {console.log(this.props)}
          {this.props.isAuthenticated && this.props.currentUser === message.user ? 
            <div>
                <Link to={`/messages/${message.id}/edit`}>Edit this Message</Link>
                <br/>
                <button onClick={this.handleDelete}>Delete Message</button>

            </div>
          : <div></div> }
        
        </div> 
      
        
      </div> 
    :
    <div>display issue</div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    isAuthenticated: state.authReducer.token !== null,
    currentUser: state.authReducer.current.username
  
  }
}

export default connect(mapStateToProps, {deleteMessage})(ViewMessage);