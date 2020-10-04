export default function message(state = [], action) {
   
    switch (action.type) {
      case 'GET_MESSAGES':  
        return action.posts
      
        
        default:
            return state
        }
      }