import React from 'react';
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';
import TodoFilter from './Todofilter';

import './index.css';

export default class TodoIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      /***
       * all completed uncompleted
      */
      currentSelect: 'all'
    }
  }
  handleReceiveTodo = (todo) => {
    this.setState({
      todoList: [todo, ...this.state.todoList]
    })
  }
  handleToggle = (todo) => {
    const newTodoList = [...this.state.todoList].map(item => {
      if (item.id === todo.id) {
        item.completed = !item.completed
        return item
      }
      return item
    })
    this.setState({
      todoList: [...newTodoList]
    })
  }
  handleRemove = (todo) => {
    const newTodoList = [...this.state.todoList]
    const len = newTodoList.length
    for (let i = 0; i < len; i++) {
      if (newTodoList[i].id === todo.id) {
        newTodoList.splice(i, 1)
        break
      }
    }
    this.setState({
      todoList: [...newTodoList]
    })
  }
  setFilterTodoList(type) {
    const data = [...this.state.todoList]
    switch (type) {
      case 'completed':
        return data.filter(todo => !todo.completed)
      case 'uncompleted':
        return data.filter(todo => todo.completed)
      default:
        return data
    }
  }
  handleFilterAll = () => {
    this.setState({
      currentSelect: 'all'
    })
  }
  handleFilterCompleted = () => {
    this.setState({
      currentSelect: 'completed'
    })
  }
  handleFilterUnCompleted = () => {
    this.setState({
      currentSelect: 'uncompleted'
    })
  }
  render() {
    return (
      <div>
        <TodoHead onHandleClick={this.handleReceiveTodo} />
        <TodoFilter
          filterAll={this.handleFilterAll}
          filterCompleted={this.handleFilterCompleted}
          filterUnCompleted={this.handleFilterUnCompleted}
          current={this.state.currentSelect}/>
        <TodoBody
          handleRemove={this.handleRemove}
          handleToggle={this.handleToggle}
          todoList={this.setFilterTodoList(this.state.currentSelect)} />
      </div>
    )
  }
}