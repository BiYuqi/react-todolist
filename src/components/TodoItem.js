import React from 'react'

const TodoItem = ({todoItem, onHandleToggle, onHandleRemove}) => {
  return (
    <li data-id={todoItem.id}>
      <span
        className={todoItem.completed ? 'active': ''}
        onClick={onHandleToggle}>{todoItem.todoValue}</span>
      <button onClick={onHandleRemove}>删除</button>
    </li>
  )
}
export default TodoItem