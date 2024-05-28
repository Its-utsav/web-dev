import React from 'react'
import TodoForm from './components/TodoForm'
import { TodoProvider } from './context/TodoContext'
import { useState, useEffect } from 'react'
import TodoItems from './components/TodoItems'
const App = () => {
    // for all todos
    let [todos, setTodos] = useState([]);

    // previous todo display same than add new todo with id with the help of date now
    let addTodo = (todo) => {
        setTodos((prevTodo) =>
            [{
                id: Date.now(), ...todo
            },
            ...prevTodo]
        )
    };

    // update todo with help of id(compare with todo id and need to update id) and replace prevTodo with new todo
    let updateTodo = (id, todo) => {
        setTodos((prevTodos) => prevTodos.map((singleTodo) => (singleTodo.id === id ? todo : singleTodo)))
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    };

    let toggleComplete = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (
            todo.id === id ? { ...todo, compeleted: !todo.compeleted } : todo
        )))
    };

    /// save in local storage 
    // disply all todo when page id loaded
    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todos")) //get into JSON
        if (todo && todo.length > 0) {
            setTodos(todo)
        }
    }, [])

    // set in local stoarge // in json format due to keep in structure

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {/* may be chance that we have muliple todos so we need to use map */}
                        {
                            todos.map((todo) =>
                            (
                                <div
                                    key={todo.id}
                                    className='w-full'>
                                    <TodoItems todo={todo} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App