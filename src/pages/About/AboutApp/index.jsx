// Components
import NavigationAbout from '../../../components/NavigationAbout';

// Styles
import styles from './styles.module.css';

const AboutApp = () => {
	return (
		<>
			<NavigationAbout page='app' />
			<div className={styles.container}>
				<h1>About App</h1>
				<p>
					DoIt! is a simple to-do list application. It is built with React, React Router, and styled-components.
					<br />
					In this app, you can add, and delete items.
					<br />
					To add an item, simply type it in the input field. To delete an item, click on the trash icon. To set an item when completed,
					click on the checkbox.
				</p>
			</div>
		</>
	);
};

export default AboutApp;
