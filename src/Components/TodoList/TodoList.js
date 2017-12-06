import React, { Component } from 'react';
import Todo from '../Todo/Todo';

/*CSS Styles */
import './TodoList.css';

class TodoList extends Component {
    
  constructor() {
    super();

    this.state = {
      todos: this.getLocalStorage() || [],
      newTodo: {
        text: '',
        completed: false
      }
    };
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('state'));
  }

  setLocalStorage(storage) {
    localStorage.setItem('state', JSON.stringify(storage));
  }

  handleTodoInput = event => {
      this.setState({ 
        newTodo: {
          text: event.target.value,
          completed: false
        }
      });
    }
  



  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    const todo = this.state.newTodo;
    if (todo === '' ) return;
    this.setState({
      todos: [...todoList, todo],
      newTodo: {
        text: '', 
        completed: false
             }         
          });
        }
      }
  removeTodo = (index) => {
    return () => {
      this.setState({
        todos: this.state.todos.filter((todo, todoIndex) => {
          return todoIndex !== index;
        })
      })
    }
}

    setState = (newState) => {
      super.setState(newState);
      this.setLocalStorage(newState.todos);
    }

  render() {
    return (
      <div>
        
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo}  remove={this.removeTodo(i)} />)}
        <form onSubmit={this.addTodo}>
          <input className="input"
            onChange={this.handleTodoInput}
            placeholder="Add a new todo"
            value={this.state.newTodo.text}
          />
          
        </form>
      </div>
    );
  }
  }


export default TodoList;
