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
    let message = this.props.message || null
    return(
      message ?
        <div className="modal" id="MessageDetail">
          <Link to="/"><span className='fa fa-close x-button'></span></Link>
          <p>{message.content} </p>
          <p>{message.user}</p>

          <div>
              {this.props.isAuthenticated && this.props.currentUser === message.user ? 
                <div>
                    <div>
                      <Link to={`/messages/${message.id}/edit`} className="button">Edit this Message</Link>
                    </div>
                    <br/>
                    <div>
                      <button className="button" onClick={this.handleDelete}>Delete Message</button>
                    </div>
                </div>
              : <div></div> }
          
          </div> 
        </div> 
      : <div>display issue</div>
      )
    }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    currentUser: state.authReducer.current.username || null
  }
}

export default connect(mapStateToProps, {deleteMessage})(ViewMessage);