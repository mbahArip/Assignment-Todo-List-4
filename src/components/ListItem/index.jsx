import styles from './index.module.css';

const ListItem = ({ id, title, complete, checkBoxCB, buttonCB }) => {
	return (
		<div className={styles.listItem}>
			<input id={id} type='checkbox' className={styles.itemCheckbox} checked={complete} onChange={checkBoxCB} />
			<span className={`${styles.itemTitle} ${complete && styles.itemComplete}`}>{title}</span>
			<button id={id} className={styles.itemDelete} onClick={buttonCB}>
				Delete
			</button>
		</div>
	);
};

export default ListItem;
