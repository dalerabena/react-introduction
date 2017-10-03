import React, { Component } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';

import TodoList from './TodoList';

import { FormGroup, FormControl, Button, HelpBlock, PageHeader } from 'react-bootstrap';

export default class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todo: '',
      item: {
        id: 0,
        title: '',
        completed: false
      },
      todos: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:4000/todos')
      .then((response) => {
        this.setState({
          todos: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.todo === '') {
      alert('todo null');
    } else {
      this.setState({     
        todo: '',
        todos: [...this.state.todos, {
          id: uuid(),
          title: this.state.todo,
          completed: false
        }]
      });
    }
  }

  handleComplete(index) {
    const updatedTodos = [...this.state.todos];
    if(updatedTodos[index].completed !== true) {
      updatedTodos[index].completed = true;
      this.setState({
        todos: updatedTodos
      });
    }
  }

  render() {

    const divStyle = {
      marginBottom: '15px'
    };

    const container = {
      marginTop: '50px'
    }

    return (
      <div className='container' style={container}>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2' style={divStyle}>
            <PageHeader>Todo List</PageHeader>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl 
                  name='todo'
                  value={this.state.todo}
                  onChange={this.handleChange}
                  placeholder='Enter todo item'
                />          
                <HelpBlock>Click todo item to remove.</HelpBlock>    
              </FormGroup>
              <Button bsStyle='primary' type='submit'>Submit</Button>            
            </form>                     
          </div> 
          <TodoList items={this.state.todos} handleComplete={this.handleComplete.bind(this)} />   
        </div> 
      </div>    
    );
  }
}