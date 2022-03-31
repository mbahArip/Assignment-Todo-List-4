// React
import { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store/TodoSlice/action';

// Components
import ListItem from '../../components/ListItem';
import NavigationHome from '../../components/NavigationHome';

// Styles
import styles from './styles.module.css';

const Home = () => {
	const [todoInput, setTodoInput] = useState('');
	const todos = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	const inputHandler = (event) => {
		event.preventDefault();

		if (todoInput === '') {
			return alert('Please enter a todo.');
		}

		dispatch(addTodo({ id: todos.length + 1, title: todoInput, complete: false }));
		event.target.reset();
		setTodoInput('');
	};

	return (
		<>
			<NavigationHome />
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
					{todos?.length === 0 && <span className={styles.noList}>There are no item in the list.</span>}
					{todos
						?.sort((a, b) => b.id - a.id)
						.map((item) => (
							<ListItem key={item.id} id={item.id} title={item.title} complete={item.complete} />
						))}
				</div>
			</div>
		</>
	);
};

export default Home;
