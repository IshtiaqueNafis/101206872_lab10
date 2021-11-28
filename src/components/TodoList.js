import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from "react-redux";

const TodoList = () => {
	const todos = useSelector(state => state.toDo);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} key={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
