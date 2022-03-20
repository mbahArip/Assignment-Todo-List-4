import styles from './index.module.css';

const ListItem = ({ id, title, complete, checkboxCallback, deleteCallback }) => {
	return (
		<div className={styles.listItem}>
			<input id={id} type='checkbox' className={styles.itemCheckbox} checked={complete} onChange={checkboxCallback} />
			<span className={`${styles.itemTitle} ${complete && styles.itemComplete}`}>{title}</span>
			<button id={id} className={styles.itemDelete} onClick={deleteCallback}>
				Delete
			</button>
		</div>
	);
};

export default ListItem;
