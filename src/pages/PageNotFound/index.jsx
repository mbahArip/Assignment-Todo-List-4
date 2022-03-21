// Library
import { useNavigate, useLocation } from 'react-router-dom';

// Styles
import styles from './styles.module.css';

// Assets
import NotFound from '../../assets/img/404.svg';

const PageNotFound = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<div className={styles.container}>
			<img src={NotFound} alt={'404 Not found'} className={styles.image} />
			<p className={styles.message}>
				The url you typed : '{pathname}' is not a valid path. <br />
				Please recheck your url.
			</p>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Go back to previous page
			</button>
		</div>
	);
};

export default PageNotFound;
