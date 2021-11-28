import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleComplete} from "../redux/TodoSliceReducer";

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	return (
		<li className='list-group-item'>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onClick={()=>dispatch(toggleComplete(id))} ></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={()=>dispatch(deleteTodo(id))}  >Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
