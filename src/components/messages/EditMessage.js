import React, { Component } from "react";
import { connect } from 'react-redux'
import { editMessage } from '../../store/actions/messageActions'

class EditMessage extends Component {
    
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
        const message = {
            content: this.state.content,
        };

        this.props.editMessage(message, this.props.message.id)
        this.setState({
            content: "",
        })

        this.props.history.push(`/messages/${this.props.match.params.id}`)
        console.log(this.props)
    };


  render() {
        let message = this.props.message || null
      
        if(message === null){
            return (<div></div>)
        } else {
            return (
            
                <div className="EditMessage">
                    <div><h4>Edit this Message</h4></div>
                    <div>   
        
                        <form onSubmit={this.handleSubmit}>
                            <div>
                            <label htmlFor="content">Change the Message, 250 characters or less:</label>
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.content}
                                    placeholder={message.content}
                                    id="content"                     
                                    rows="3"
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

export default connect(null, {editMessage})(EditMessage);