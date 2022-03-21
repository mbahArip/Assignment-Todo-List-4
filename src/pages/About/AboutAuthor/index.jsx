// Components
import NavigationAbout from '../../../components/NavigationAbout';

// Styles
import styles from './styles.module.css';

// Assets
import Avatar from '../../../assets/img/AriefRachmawan.jpg';

const socialLink = [
	{
		name: 'Github',
		link: 'https://www.github.com/mbaharip',
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/mbaharip/',
	},
	{
		name: 'Twitter',
		link: 'https://www.twitter.com/mbaharip_/',
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/mbaharip_/',
	},
];
const AboutAuthor = () => {
	return (
		<>
			<NavigationAbout page='author' />
			<div className={styles.container}>
				<h1>About Author</h1>
				<div className={styles.author}>
					<img src={Avatar} alt={'Arief Rachmawan'} className={styles.authorImage} />
					<div className={styles.authorAbout}>
						<p>
							Hello! My name is <b>Arief Rachmawan</b>. <br />
							I'm currently a student at local university in <b>Bandung, Indonesia</b>. <br />I love doing 3D Works, Graphic Design, and
							Programming.
						</p>
						<div className={styles.socialContainer}>
							<h2>Social Link</h2>
							<ul>
								{socialLink.map((item, index) => (
									<li key={index}>
										<a href={item.link} target='_blank' rel='noopener noreferrer'>
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutAuthor;
