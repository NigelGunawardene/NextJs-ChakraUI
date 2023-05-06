import styles from './page.module.css';
import Card from './components/ui/Card';

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Card />
			</main>
		</>
	);
}
