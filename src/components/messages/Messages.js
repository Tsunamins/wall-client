// will render a list of messages which will come
// from the message detail component
import React from 'react';
import { Link } from 'react-router-dom'

function Messages(props) {

 console.log(props)
 const messageDetails = props.messages.map(m => 
    <li key={m.id}>
      <Link to={`/messages/${m.id}`}>{m.content}</Link>
      <span>{m.user}</span>
    </li>
  )

  return(
        <div className="Messages">
            {messageDetails}
        </div>
      )
}

export default Messages