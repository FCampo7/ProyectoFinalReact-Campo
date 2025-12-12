import { createContext, useContext, useState } from "react";
import CartProvider from "./CartProvider";
import { auth } from "../firebase/config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import styles from "../css/loader.module.css";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error(error.message);
		}
	};

	if (user === undefined)
		return (
			<div className={styles.centerLoader}>
				<span className={styles.loader}></span>
				<p>Checking user...</p>
			</div>
		);

	return (
		<UserContext.Provider value={{ user, setUser, handleLogout }}>
			<CartProvider>{children}</CartProvider>
		</UserContext.Provider>
	);
};
