import { createContext, useContext, useState } from "react";
import CartProvider from "./CartProvider";
import { auth } from "../firebase/config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import styles from "../css/loader.module.css";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(undefined);
	const [userData, setUserData] = useState(undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);

			const loadUserData = async () => {
				if (currentUser) {
					const docRef = await doc(db, "users", currentUser.uid);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						setUserData(docSnap.data());
					}
				} else {
					setUserData(null);
				}
			};
			loadUserData();
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/");
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
		<UserContext.Provider value={{ user, userData, setUser, handleLogout }}>
			<CartProvider>{children}</CartProvider>
		</UserContext.Provider>
	);
};
