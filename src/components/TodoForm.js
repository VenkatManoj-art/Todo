import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todoText:""
      };
    }
    // Function (or) method with arrow fn
    todo = (m)=>{
       m.preventDefault();
       this.props.addTodo(this.state.todoText);
       this.setState({todoText:''}) //This will clears input when the user enters.
    }
  render() {
    return (
      <div>
          <form onSubmit={this.todo}>
          <input type="text" 
          placeholder='Enter your todo here..!'
          value={this.state.todoText}
          onChange={(e) =>this.setState({todoText:e.target.value})}/>
          </form>
      </div>
      
    )
  }
}
