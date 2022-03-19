import React from 'react';
import styles from './App.module.css';
import { default as ListItem } from './components/ListItem';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoInput: '',
			todoList: [],
		};
	}

	inputHandler = (event) => {
		event.preventDefault();

		if (this.state.todoInput === '') {
			return alert('Please enter a todo.');
		}
		this.setState({ todoList: [{ id: this.state.todoList.length + 1, title: this.state.todoInput, complete: false }, ...this.state.todoList] });
		event.target.reset();
		this.setState({ todoInput: '' });
	};

	checkHandler = (event) => {
		// Get list
		const itemID = parseInt(event.target.id);
		let updatedItem = this.state.todoList.find((item) => item.id === itemID);
		updatedItem = [{ ...updatedItem, complete: !updatedItem.complete }];
		let newList = this.state.todoList.map((item) => updatedItem.find((obj) => obj.id === item.id) || item);
		this.setState({ todoList: newList });

		// let findItem = this.state.todoList.find((item) => item.id === itemID);
		// findItem = { ...findItem, complete: !findItem.complete };
		// this.setState({ todoList: [...this.state.todoList, findItem] });
	};

	deleteHandler = (event) => {
		const itemID = parseInt(event.target.id) - 1;
		const filterList = this.state.todoList.filter((item) => item.id !== itemID + 1);
		this.setState({ todoList: filterList });
	};

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.title}>
					<h1 className={styles.titleBig}>DoIt!</h1>
					<span className={styles.titleSmall}>Todo tracker App</span>
				</div>
				<form
					className={styles.inputForm}
					onSubmit={(e) => {
						this.inputHandler(e);
					}}
				>
					<input
						placeholder='Add todo...'
						className={styles.inputTodo}
						onChange={(e) => {
							this.setState({ todoInput: e.target.value });
						}}
					/>
					<button type='submit' className={styles.inputButton}>
						Submit
					</button>
				</form>
				<div className={styles.listTodo}>
					{this.state.todoList.length === 0 && <span className={styles.noList}>There are no item in the list.</span>}
					{this.state.todoList.map((item) => (
						<ListItem
							key={item.id}
							id={item.id}
							title={item.title}
							complete={item.complete}
							checkboxCallback={(e) => {
								this.checkHandler(e);
							}}
							deleteCallback={(e) => {
								this.deleteHandler(e);
							}}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
