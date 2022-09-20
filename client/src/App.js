import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <Routes>
            <Route path={'/'} element={<TodoList />} />
            <Route path={'/:filter'} element={<TodoList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
