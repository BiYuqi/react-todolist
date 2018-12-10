import React from 'react'
const headWrapStyle = {
  width: '800px',
  height: '50px',
  display: 'flex'
}
const headInnerInputStyle = {
  flex: '1'
}
const headAddStyle = {
  width: '100px',
  backgroundColor: '#bd327f',
  color: '#fff',
  fontSize: '16px'
}
export default class TodoHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
      completed: false,
      id: 0
    }
  }
  handleClick = () => {
    if (!this.state.todoValue) {
      alert('不能为空哦')
      return
    }
    this.props.onHandleClick({
      todoValue: this.state.todoValue,
      completed: false,
      id: this.state.id
    })
    this.setState({
      todoValue: '',
      completed: false,
      id: 0
    })
  }
  handleChange = (e) => {
    this.setState({
      todoValue: e.target.value,
      id: [Date.now(),  Math.random() * 10000 * 9999].join('-')
    })
  }
  render() {
    return (
      <div style={headWrapStyle}>
        <input
          type="text"
          value={this.state.todoValue}
          onChange={this.handleChange}
          style={headInnerInputStyle}/>
        <button
          onClick={this.handleClick}
          style={headAddStyle}>
          Add Todo
        </button>
      </div>
    )
  }
}