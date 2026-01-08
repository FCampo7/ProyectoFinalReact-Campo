import { useRef, useState, useEffect } from "react"; // 1. Importamos useEffect
import { NavLink } from "react-router-dom";
import { ShoppingBasket, ShoppingCart, Menu, Home } from "lucide-react";

import CartWidget from "./CartWidget/CartWidget";
import styles from "./NavLinkContainer.module.css";
import { useCart } from "../../../context/CartProvider";
import { useUser } from "../../../context/UserContext";

const NavLinkContainer = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isHamburger, setIsHamburger] = useState(false);

	const refHamburger = useRef(null);
	const refCartWidget = useRef(null);

	const { user, handleLogout } = useUser();
	const { totalProducts } = useCart();

	const closeAll = () => {
		setIsHamburger(false);
		setIsCartOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			// Cerrar menú hamburguesa si se hace clic fuera
			if (
				isHamburger &&
				refHamburger.current &&
				!refHamburger.current.contains(event.target) &&
				isCartOpen &&
				refCartWidget.current &&
				!refCartWidget.current.contains(event.target)
			) {
				closeAll();
			}
		};

		// Escuchar clics en el documento
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			// Limpiar el evento al desmontar
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isHamburger, isCartOpen]); // Dependencias para que el listener use valores frescos

	const toggleCart = () => setIsCartOpen(!isCartOpen);
	const toggleHamburger = () => setIsHamburger(!isHamburger);

	// Ajustamos el HamburgerMenu para que no detenga la propagación si quieres que se comporte normal
	const HamburgerMenu = () => (
		<div
			className={styles.hamburgerMenu}
			onClick={(e) => {
				e.stopPropagation(); // Evitamos que el clic del botón cierre el menú inmediatamente
				toggleHamburger();
			}}
		>
			<Menu />
		</div>
	);

	return (
		<>
			<div
				ref={refHamburger}
				className={`${styles.navLinkContainer} ${
					isHamburger ? styles.visible : styles.hidden
				}`}
			>
				<NavLink className={styles.navLink} to="/" onClick={closeAll}>
					<Home height={24} />
					<p>Home</p>
				</NavLink>
				<NavLink
					className={styles.navLink}
					to={`/products`}
					onClick={closeAll}
				>
					<ShoppingBasket height={24} />
					<p>Products</p>
				</NavLink>

				{/* Agregamos e.stopPropagation() para que al abrir el carrito no se detecte como "fuera" */}
				<NavLink
					className={styles.navLink}
					onClick={(e) => {
						e.stopPropagation();
						toggleCart();
					}}
				>
					<div style={{ position: "relative" }}>
						<ShoppingCart size={24} />
						{totalProducts > 0 && (
							<span className={styles.totalItems}>
								{totalProducts}
							</span>
						)}
					</div>
				</NavLink>

				{user ? (
					<NavLink
						className={styles.navLink}
						onClick={() => {
							handleLogout();
							closeAll();
						}}
						to="/"
					>
						Log Out
					</NavLink>
				) : (
					<NavLink
						className={styles.navLink}
						to="/login"
						onClick={closeAll}
					>
						<p>Log In</p>
					</NavLink>
				)}
			</div>

			<HamburgerMenu />

			{isCartOpen && (
				<div
					ref={refCartWidget}
					className={`${styles.widgetContainer} ${styles.visible}`}
				>
					<CartWidget />
				</div>
			)}
		</>
	);
};

export default NavLinkContainer;
