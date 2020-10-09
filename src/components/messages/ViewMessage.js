//will render message itself along with the 
//User it belongs to
import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function ViewMessage({message}) {

  function handleDelete(){
    this.props.deletePost(this.props.message.id)
  }
     
     
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
              <button onClick={handleDelete}>Delete Message</button>
          </div>
        </div> 
      
        
      </div> 
    :
    <div>display issue</div>
  )

}

export default ViewMessage