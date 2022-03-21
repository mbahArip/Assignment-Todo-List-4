// Library
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.module.css';

const NavigationAbout = ({ page }) => {
	return (
		<nav className={styles.navbar}>
			<Link to={'/'} className={styles.back}>
				{'<  Go Back'}
			</Link>
			<div className={styles.menu}>
				<ul>
					<li>
						<Link to='/about/about-app' className={page === 'app' ? styles.active : undefined}>
							About App
						</Link>
					</li>
					<li>
						<Link to='/about/about-author' className={page === 'author' ? styles.active : undefined}>
							About Author
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavigationAbout;
