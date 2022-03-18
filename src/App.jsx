import { useState } from 'react';
import styles from './App.module.css';
import { default as ListItem } from './components/ListItem';

const App = () => {
	const [todoInput, setTodoInput] = useState(null);
	const [todoList, setTodoList] = useState([]);

	const inputHandler = (e) => {
		e.preventDefault();

		if (!todoInput || todoInput === '') {
			return alert("Todo can't be empty!");
		}
		setTodoList([...todoList, { id: todoList.length + 1, title: todoInput, complete: false }]);
		e.target.reset();
		setTodoInput('');
	};

	const checkHandler = (e) => {
		const newTodoList = [...todoList];
		const itemID = parseInt(e.target.id) - 1;
		newTodoList[itemID].complete = !newTodoList[itemID].complete;
		setTodoList(newTodoList);
	};

	const deleteHandler = (e) => {
		const itemID = parseInt(e.target.id);
		const filterList = todoList.filter((item) => item.id !== itemID);
		setTodoList(filterList);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1 className={styles.titleBig}>DoIt!</h1>
				<span className={styles.titleSmall}>Todo tracker App</span>
			</div>
			<form
				className={styles.inputForm}
				onSubmit={(e) => {
					inputHandler(e);
				}}
			>
				<input
					placeholder='Add todo...'
					className={styles.inputTodo}
					onChange={(e) => {
						setTodoInput(e.target.value);
					}}
				/>
				<button type='submit' className={styles.inputButton}>
					Submit
				</button>
			</form>
			<div className={styles.listTodo}>
				{todoList.length === 0 && <span className={styles.noList}>There are no list item.</span>}
				{todoList.map((item) => (
					<ListItem
						key={item.id}
						id={item.id}
						title={item.title}
						complete={item.complete}
						checkBoxCB={(e) => {
							checkHandler(e);
						}}
						buttonCB={(e) => {
							deleteHandler(e);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
