import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FormGroup, FormControl, Button, HelpBlock, PageHeader } from 'react-bootstrap';

import TodoList from './TodoList';

import 'react-toastify/dist/ReactToastify.min.css';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todo: '',
      todos: []
    };
  }

  getTodos = () => {
    this.setState({
      todos: [
        'delectus aut autem',
        'quis ut nam facilis et officia qui',
        'fugiat veniam minus'
      ]
    });
  }

  componentWillMount() {
    this.getTodos();
  }

  notify = (msg) => toast.success(msg);

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
        todos: [...this.state.todos, this.state.todo]      
      }); 
      this.notify('todo item added!');
    }
  }

  handleDelete(index) {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
    this.notify('todo item deleted!');
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
          <TodoList items={this.state.todos} handleDelete={this.handleDelete.bind(this)} />
        </div> 
        <ToastContainer />
      </div>           
    );
  }
}

export default Todo;
