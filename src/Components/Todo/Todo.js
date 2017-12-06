import React, { Component } from 'react';

/*CSS Styles */
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      text: props.text,
      completed: props.completed
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  render() {
    const styles = this.state.completed
      ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };
    return (
      <div>
        <div className="Todo-Container">
          <div className="Button-Container">
            <button className="btn btn--delete" onClick={() => this.props.remove()}>
              X
            </button>
            <div
              onClick={this.handleClick}
              style={styles}
              className="Todo-Container__item"
            >
            
              {this.props.todo.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
