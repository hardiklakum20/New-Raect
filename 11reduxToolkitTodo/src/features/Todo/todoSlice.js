import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const initialState = {
    todos: getInitialTodos()
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo:(state, action) => {
            // state.todos = state.todos.map((todo) => todo.id === id ? action.payload:todo)
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        }
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer