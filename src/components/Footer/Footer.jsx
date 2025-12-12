import { Github, Instagram, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.brand}>
				© {new Date().getFullYear()} Avra Studio
			</p>

			<div className={styles.links}>
				<a
					href="https://github.com/FCampo7"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github />
				</a>
				<a
					href="https://www.instagram.com/francisco.campo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Instagram />
				</a>
				<a
					href="https://www.linkedin.com/in/francisco-luis-campo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin />
				</a>
			</div>

			<p className={styles.powered}>
				Built with ❤️ by{" "}
				<a
					href="https://fcampo.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Francisco Luis Campo
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;
