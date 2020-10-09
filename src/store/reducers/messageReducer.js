export default function message(state = [], action) {
   
    switch (action.type) {
      case 'GET_MESSAGES':  
        return action.messages
      case 'ADD_MESSAGE':
        return state.concat(action.message)
      case 'UPDATE_MESSAGE':
        return state.map(message => message.id === action.message.id ? action.message : message)


        default:
            return state
        }
      }