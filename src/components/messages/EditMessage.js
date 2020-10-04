import React, { Component } from "react";
import {connect} from 'react-redux'

class EditMessage extends Component {
    
    state = {
      content: "",
  }

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();
    const editMessage = {
        content: this.state.content,
    };
    console.log(editMessage)
    this.props.editMessage(editMessage, this.props.message.id)
    this.setState({
        content: "",
     
  })
  this.props.history.push(`/messages/${this.props.match.params.id}`)
    console.log(this.props)

  };


  render() {
        let message = this.props.message || null
        console.log(this.props)
      
        if(message === null){
            return (<div></div>)
        } else {
        return (
          
            <div className="EditMessage">
                <div><h4>Edit this Post</h4></div>
                <div>   
       
                    <form onSubmit={this.handleSubmit}>
                        <div>
                         <label htmlFor="content">Add the content of the blog:</label>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.content}
                                placeholder={message.content}
                                id="content"                     
                                rows="10"
                            />
                        </div>
        
                        <div>
                            <button type="submit">Submit Changes</button>
                        </div>
                    </form>

                </div>
            </div>
     
  
    );
    }
  }

}

export default EditMessage