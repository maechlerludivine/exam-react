import React, { Component } from 'react';
import Todo from "./containers/Todo";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <h2> TodoList Dnd</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
