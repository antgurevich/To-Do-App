import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please enter a valid todo");
        }
        };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    className="input-text"
                    type="text" 
                    placeholder="Add Todo..." 
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}/>
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo