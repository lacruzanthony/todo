import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo'

const TodoItem = ({ number, id, name, isComplete, toggleTodo, deleteTodo }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <span>
        {number}
      </span>
      <span className='delete-item'>
        <button onClick={() => dispatch(deleteTodo(id))}>X</button>
      </span>
      <input type="checkbox"
        checked={isComplete}
        onChange={() => dispatch(toggleTodo(id))} />
      {name}
    </li>
  )
}

const TodoList = () => {
  const { filter } = useParams()
  const todos = useSelector((state) => getVisibleTodos(state.todo.todos, filter))
  debugger;
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo, idx) =>
          <TodoItem key={todo.id}
            number={idx}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...todo} />)}
      </ul>
    </div>
  )
}

export default connect(
  (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),
  { fetchTodos, toggleTodo, deleteTodo }
)(TodoList)
