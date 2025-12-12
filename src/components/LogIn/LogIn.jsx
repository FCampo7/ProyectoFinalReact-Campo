import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import styles from "./LogIn.module.css";
import { doc, getDoc } from "firebase/firestore";

const LogIn = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogIn = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const credential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			const firebaseUser = credential.user;

			const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
			if (!userDoc.exists()) {
				setError("No user with this email.");
				setLoading(false);
				return;
			}

			navigate("/products");
		} catch (err) {
			setError(err.code);
			setLoading(false);
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleLogIn} className={styles.form}>
				<h2 className={styles.title}>Log in</h2>
				<input
					className={styles.input}
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className={styles.input}
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className={styles.error}>{error && <p>{error}</p>}</div>
				<div className={styles.buttonsDiv}>
					<button
						type="button"
						className={styles.button}
						onClick={() => {
							navigate("/signup");
						}}
					>
						Sign Up
					</button>
					<button
						className={styles.button}
						type="submit"
						disabled={loading}
					>
						{loading ? "Logging in..." : "Log in"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
