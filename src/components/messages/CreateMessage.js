import React, { Component } from "react";
import { connect } from 'react-redux'
import { createMessage } from '../../store/actions/messageActions'


class CreateMessage extends Component {

    state = {
      content: "",
  }

    handleChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value 
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const newMessage = {
            content: this.state.content,      
            };
            console.log(newMessage)
        this.props.createMessage(newMessage)
        this.setState({
            content: "",
        })
        props.history.push("/")
    };


  render() {
       
        return (
            <div className="CreateMessage">
                <div><h4>Create a Message</h4></div>
                <div>   
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="content">Add to the writing on the wall:</label>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.content}
                                placeholder="Content"
                                id="content"
                                rows="10"
                            />
                        </div>
            
                        <div>
                            <button type="submit">Write on the Wall</button>
                        </div>
                    </form>
                </div>
            </div>
  
    );
  }

}



export default connect(null, {createMessage}) (CreateMessage);