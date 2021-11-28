import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './TodoSliceReducer';


export const store= configureStore({
    reducer: {
toDo : todoReducer
    },
});