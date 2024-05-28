import { createContext, useContext } from "react";

// create contetx
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "This is TODO msg",
      compeleted: false,
    },
  ],
  // CRUD operations
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// context providers
export const TodoProvider = TodoContext.Provider;

// useHook (useContext)

export const useTodo = () => {
  return useContext(TodoContext);
};
