// will render a list of messages which will come
// from the message detail component
import React from 'react';
import { Link} from 'react-router-dom'


function Messages(props) {
  const messageDetails = props.messages.map(m => 
    <div key={m.id}>
      <Link to={`/messages/${m.id}`}>{m.content}</Link>
      <span>{m.user}</span>
    </div>
  )
  
  return(
        <div id="Messages">
            {messageDetails}
        </div>
  )
}

export default Messages