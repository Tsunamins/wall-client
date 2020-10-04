// will render a list of messages which will come
// from the message detail component
import React from 'react';
import { Link, Route } from 'react-router-dom'
import ViewMessage from './ViewMessage'
import EditMessage from './EditMessage'

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
            <Route exact path='/messages/:id' render={props => {
             const message = props.messages.find(element => element._id.toString() === props.match.params.id)
             return <ViewMessage message={message} {...props}/>
           }
         }/>
         <Route exact path='/messages/:id/edit' render={props => {
            const message = props.messages.find(element => element._id.toString() === props.match.params.id)
            return <EditMessage message={message} {...props}/>
          }
        }/>
        </div>
      )
}

export default Messages