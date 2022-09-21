import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateCurrent, saveTodo, saveSearch } from '../reducers/todo'

const TodoForm = ({ currentTodo, searchTodo, todos }) => {
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const val = event.target.value
    dispatch(updateCurrent(val))
  }

  const handleSubmit = (event) => {
    debugger
    event.preventDefault()
    dispatch(saveTodo(currentTodo))
  }

  const handleSearchTask = (event) => {
    dispatch(saveSearch(event.target.value))
    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-name">Task name</label>
      <div>
        <input id="task-name" type="text"
          onChange={handleInputChange}
          value={currentTodo} />
      </div>
      <label htmlFor="filter-by-name">Search task</label>
      <div>
        <input id="filter-by-name" type="text"
          onChange={handleSearchTask}
          value={searchTodo}
        />
      </div>
      <input type="submit" hidden />
    </form>
  )
}

export default connect(
  (state) => ({ currentTodo: state.todo.currentTodo, searchTodo: state.todo.searchTodo, todos: state.todo.todos }),
  { updateCurrent, saveTodo, saveSearch }
)(TodoForm)
