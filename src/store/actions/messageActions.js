//ACTIONS
export const getMessages = () => dispatch => {  
    
    return fetch('http://127.0.0.1:8000/wall-api/messages')
     .then(resp => resp.json())
     .then(response => {
         if(response.error){
             alert(response.error)
         } else {
            console.log(response)
           // dispatch(getAllMessages(response.data))
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