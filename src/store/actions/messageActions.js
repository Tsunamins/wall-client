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
    return fetch('http://127.0.0.1:8000/wall-api/messages/create/', {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(postData)
        
    })
    .then(resp => resp.json())
    .then(response => {
        if(response.error){
          alert(response.error)
        } else {
          console.log(response)
          dispatch(addMessage(response.data))
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

