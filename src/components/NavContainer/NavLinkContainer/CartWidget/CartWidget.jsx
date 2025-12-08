import ItemWidget from "./ItemWidget/ItemWidget";
import styles from "./CartWidget.module.css";
import { useCart } from "../../../../context/CartProvider";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
	const { cart, clearCart, totalPrice, totalProducts } = useCart();
	const navigate = useNavigate();

	return (
		<div className={styles.cartWidget}>
			<button
				className={styles.button}
				disabled={totalProducts < 1}
				onClick={clearCart}
			>
				Clear
			</button>
			{cart.map((item) => (
				<ItemWidget key={item.snapshotName} item={item} />
			))}
			<p className={styles.totalPrice}>
				<strong>Total:</strong> ${totalPrice}
			</p>
			<button
				className={styles.button}
				disabled={totalProducts < 1}
				onClick={() => navigate("/checkout")}
			>
				Buy!
			</button>
		</div>
	);
};

export default CartWidget;
