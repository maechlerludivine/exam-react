import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      inputValue: "",
    }
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  onClickButton(){
    this.setState({
      inputValue: "",
    });
    this.props.onAddTodo(this.state.inputValue);
  }

  DragEndHandler(){
      this.props.onDragEnd();
  }

  DragStartHandler(){
      this.props.onDragStart();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <button onClick={this.onClickButton}>Ajouter</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}


export default TodoInput;
