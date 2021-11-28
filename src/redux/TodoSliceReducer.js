import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },

});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;