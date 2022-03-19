import React from 'react';
import styles from './index.module.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.listItem}>
				<input
					id={this.props.id}
					type='checkbox'
					className={styles.itemCheckbox}
					checked={this.props.complete}
					onChange={this.props.checkboxCallback}
				/>
				<span className={`${styles.itemTitle} ${this.props.complete && styles.itemComplete}`}>{this.props.title}</span>
				<button id={this.props.id} className={styles.itemDelete} onClick={this.props.deleteCallback}>
					Delete
				</button>
			</div>
		);
	}
}

// const ListItem = ({ id, title, complete, checkBoxCB, buttonCB }) => {
// 	return (
// {/* <div className={styles.listItem}>
// 	<input id={id} type='checkbox' className={styles.itemCheckbox} checked={complete} onChange={checkBoxCB} />
// 	<span className={`${styles.itemTitle} ${complete && styles.itemComplete}`}>{title}</span>
// 	<button id={id} className={styles.itemDelete} onClick={buttonCB}>
// 		Delete
// 	</button>
// </div>; */}
// 	);
// };

export default ListItem;
