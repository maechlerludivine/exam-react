import React, {PropTypes} from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return <ul onDragOver={this.dragOver}>
  {
    props.todos.map((item, index)=>{

      const isTodoFiltered = (props.filter==="todo" && item.complete===true);
      const isCompleteFiltered = (props.filter==="complete" && item.complete===false);
      if(isTodoFiltered || isCompleteFiltered) return null;

      return <TodoItem key={index}
                       label={item.label}
                       complete={item.complete}
                       onClick={props.selectItem.bind(this,index)}
                       draggable="true"
                       onDragEnd={item.DragEndHandler}
                       onDragStart={item.DragStartHandler}
            />
    })
  }</ul>;
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
}

export default TodoList;
