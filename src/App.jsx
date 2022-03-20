import { useState } from 'react';
import styles from './App.module.css';
import { default as ListItem } from './components/ListItem';

const App = () => {
	const [todoInput, setTodoInput] = useState('');
	const [todoList, setTodoList] = useState([]);

	const inputHandler = (event) => {
		event.preventDefault();

		if (todoInput === '') {
			return alert('Please enter a todo.');
		}

		setTodoList([{ id: todoList.length + 1, title: todoInput, complete: false }, ...todoList]);
		event.target.reset();
		setTodoInput('');
	};

	const checkHandler = (event) => {
		// Get list
		const itemID = parseInt(event.target.id);
		let updatedItem = todoList.find((item) => item.id === itemID);
		updatedItem = [{ ...updatedItem, complete: !updatedItem.complete }];
		let newList = todoList.map((item) => updatedItem.find((obj) => obj.id === item.id) || item);
		setTodoList(newList);
	};

	const deleteHandler = (event) => {
		const itemID = parseInt(event.target.id) - 1;
		const filterList = todoList.filter((item) => item.id !== itemID + 1);
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
				{todoList.length === 0 && <span className={styles.noList}>There are no item in the list.</span>}
				{todoList.map((item) => (
					<ListItem
						key={item.id}
						id={item.id}
						title={item.title}
						complete={item.complete}
						checkboxCallback={(e) => {
							checkHandler(e);
						}}
						deleteCallback={(e) => {
							deleteHandler(e);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
