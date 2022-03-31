import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { checkTodo, deleteTodo } from '../../store/TodoSlice/action';

const ListItem = ({ id, title, complete }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.listItem}>
			<input
				id={id}
				type='checkbox'
				className={styles.itemCheckbox}
				checked={complete}
				onChange={(e) => {
					dispatch(checkTodo(e.target.id));
				}}
			/>
			<span className={`${styles.itemTitle} ${complete && styles.itemComplete}`}>{title}</span>
			<button id={id} className={styles.itemDelete} onClick={(e) => dispatch(deleteTodo(e.target.id))}>
				Delete
			</button>
		</div>
	);
};

export default ListItem;
