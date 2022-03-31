const addTodo = (todo) => {
	return {
		type: 'todo/add',
		payload: { todo },
	};
};

const checkTodo = (id) => {
	return {
		type: 'todo/check',
		payload: { id },
	};
};

const deleteTodo = (id) => {
	return {
		type: 'todo/delete',
		payload: { id },
	};
};

export { addTodo, checkTodo, deleteTodo };
