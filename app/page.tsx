// import styles from './page.module.css';
import MainContainerBox from '@/components/MainContainerBox';
import Card from '@/ui/Card';
import { Navbar } from '@/ui/Navbar/Navbar';
import Toast from '@/components/Toast';

export default function Home() {
	return (
		<>
			{/* <main className={styles.main}>
			</main> */}
			<MainContainerBox>
				<Navbar />
				<Card />
				{/* use the toast component to display a toast here */}
			</MainContainerBox>
		</>
	);
}
