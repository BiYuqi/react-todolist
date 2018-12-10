
import React from 'react'
import TodoItem from './TodoItem';

export default class TodoBody extends React.Component {
  render() {
    return (
      <ul className="todo-body">
        {
          this.props.todoList.length > 0 ? this.props.todoList.map(item => {
            return (
              <TodoItem
                // 此处采坑了，函数，被自己直接调用了
                onHandleToggle={() => this.props.handleToggle(item)}
                onHandleRemove={() => this.props.handleRemove(item)}
                todoItem={item}
                key={item.id}>
              </TodoItem>
            )
          }) : '啥都没有....'
        }
      </ul>
    )
  }
}