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
      <div>
        <p>{message.content} </p>
        <p>{message.user}</p>

        <div>
          <div>
              <Link to={`/messages/${message.id}/edit`}>Edit this Message</Link>
          </div>
          <div>
              <button onClick={this.handleDelete}>Delete Message</button>
          </div>
        </div> 
      
        
      </div> 
    :
    <div>display issue</div>
    )
  }

}

export default connect(null, {deleteMessage})(ViewMessage);