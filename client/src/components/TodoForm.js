import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateCurrent, saveTodo, searchTodo } from '../reducers/todo'



const handleInputChange = (event) => {
  debugger;
  const dispatch = useDispatch()
  const val = event.target.value
  dispatch(updateCurrent(val))
}

const handleSubmit = (event) => {
  debugger
  const dispatch = useDispatch()
  event.preventDefault()
  dispatch(saveTodo(this.props.currentTodo))
}
const TodoForm = ({ currentTodo }) => {

  // const handleSearchTask = (event) => {
  //   const dispatch = useDispatch()
  //   dispatch(searchTodo(event.target.value))
  //   return
  // }
  return (
    <form onSubmit={handleSubmit}>
      <label for="task-name">Task name</label>
      <div>
        <input id="task-name" type="text"
          onChange={handleInputChange}
          value={currentTodo} />
      </div>
      <label for="filter-by-name">Search task</label>
      {/* <div>
        <input id="filter-by-name" type="text"
          onChange={handleSearchTask}
        />
      </div> */}
    </form>
  )
}

export default connect(
  (state) => ({ currentTodo: state.todo.currentTodo }),
  { updateCurrent, saveTodo, searchTodo }
)(TodoForm)
