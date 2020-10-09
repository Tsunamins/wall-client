//ACTIONS
export const getMessages = () => dispatch => {  
    
    return fetch('http://127.0.0.1:8000/wall-api/messages/')
     .then(resp => resp.json())
     .then(response => {
         if(response.error){
             alert(response.error)
         } else {
            console.log(response)
           dispatch(getAllMessages(response))
         }
         })
         .catch(console.log)
       
}


export const createMessage = (message) => dispatch => {
    let token = localStorage.token
    return fetch('http://127.0.0.1:8000/wall-api/messages/create/', {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": 'application/json',
            "Authorization": "Token " + token
        },
        body: JSON.stringify(message)
        
    })
    .then(resp => resp.json())
    .then(response => {
        if(response.error || response.detail){
          alert(response.error || response.detail)
        } else {
          console.log(response)
          dispatch(addMessage(response))
        }
      })
      .catch(console.log)
}

export const editMessage = (message, id) => dispatch => {
    let token = localStorage.token
    return fetch(`http://127.0.0.1:8000/wall-api/messages/${id}/update/`, {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
            "Accept": 'application/json',
            "Authorization": "Token " + token
        },
        body: JSON.stringify(message)
        
    })
    .then(resp => resp.json())
    .then(response => {
        if(response.error || response.detail){
          alert(response.error || response.detail)
        } else {
          console.log(response)
          dispatch(updateMessage(response))
        }
      })
      .catch(console.log)
} 

//ACTION CREATORS
export const getAllMessages = messages => {    
    return {
        type: "GET_MESSAGES",
        messages 
    }
  }

  export const addMessage = message => {    
    return {
        type: "ADD_MESSAGE",
        message 
    }
  }

  export const updateMessage = message => {
      return {
          type: 'UPDATE_MESSAGE',
          message
      }
  }

