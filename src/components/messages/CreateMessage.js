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
            
        this.props.createMessage(newMessage)
        this.props.history.push("/")
        this.setState({
            content: "",
        })
    };


  render() {
        return (
            <div id="CreateMessage">
                <div>   
                    <form onSubmit={this.handleSubmit}>
                            <label htmlFor="content">Add to the writing on the wall:</label>

                            <br/>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.content}
                                placeholder="Content, limit 250 characters"
                                id="content"
                                rows="3"
                                cols="50"
                            />
                     
                            <br/>
                            <button className="button" type="submit">Write on the Wall</button>
          
                    </form>
                </div>
            </div>
        );
  }

}

export default connect(null, {createMessage})(CreateMessage);