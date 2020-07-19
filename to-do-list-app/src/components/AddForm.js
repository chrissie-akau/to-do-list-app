import React, { Component } from 'react';

class AddForm extends Component {
    state = { 
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
     
    render() { 
        return ( 
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </>
         );
    }
}
 
export default AddForm;