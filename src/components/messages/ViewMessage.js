//will render message itself along with the 
//User it belongs to
import React from 'react';
import { Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'

function ViewMessage({message}) {
 console.log(message)
      return(
        message ?
        <div>
          <p>{message.content} </p>
          <p>{message.user}</p>
        </div> :
        <div>Loc display issue</div>
      )

 
}

export default ViewMessage