import React from 'react'

const setClassName = (current, type) => {
  return current === type ? 'active' : ''
}
const TodoFilter = ({current, filterAll, filterCompleted, filterUnCompleted}) => {
  return (
    <div className="filter-wrap">
      <button className={setClassName(current, 'all')} onClick={filterAll}>All</button>
      <button className={setClassName(current, 'completed')} onClick={filterCompleted}>completed</button>
      <button className={setClassName(current, 'uncompleted')} onClick={filterUnCompleted}>Uncompleted</button>
    </div>
  )
}
export default TodoFilter