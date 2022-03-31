const initialValue = [
	{
		id: 1,
		title: 'Mengerjakan exercise',
		complete: true,
	},
	{
		id: 2,
		title: 'Mengerjakan assignment',
		complete: false,
	},
];

const todoListReducer = (state = initialValue, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'todo/add':
			return [...state, payload.todo];
		case 'todo/delete':
			return state.filter((todo) => todo.id !== parseInt(payload.id));
		case 'todo/check':
			let taskID = parseInt(payload.id);
			let updateTask = state.find((todo) => todo.id === taskID);
			updateTask = [{ ...updateTask, complete: !updateTask.complete }];
			let newState = state.map((todo) => updateTask.find((task) => task.id === todo.id) || todo);
			return newState;
		default:
			return state;
	}
};

export default todoListReducer;
