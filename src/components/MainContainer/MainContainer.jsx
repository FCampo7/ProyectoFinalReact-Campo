import styles from "./MainContainer.module.css";
import fullLogo from "../../assets/Avra-Studio-Full-Logo.png";
import { useUser } from "../../context/UserContext";

const MainContainer = () => {
	const { userData } = useUser();

	return (
		<>
			<main className={styles.main}>
				<img width={140} src={fullLogo} alt="Avra Studio Logo" />

				<h3 className={styles.title}>
					Welcome to Avra Studio{userData ? " " + userData.name : ""}!
				</h3>

				<p className={styles.subtitle}>
					Thank you for visiting our platform. Here you can explore
					our products, manage your cart, and enjoy an experience
					designed to be simple, fast, and efficient.
				</p>

				<div className={styles.infoBox}>
					<p>
						🚀 <strong>Avra Studio</strong> combines design and
						functionality to offer you a modern and intuitive
						shopping experience.
					</p>
					<p>
						🛒 Browse products, add them to your cart, and complete
						your orders easily.
					</p>
					<p>
						🔐 Your account and personal information are always safe
						thanks to our integration with Firebase.
					</p>
				</div>
			</main>
		</>
	);
};

export default MainContainer;
