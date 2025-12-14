import { useState } from "react";
import styles from "./CheckoutForm.module.css";
import { useCart } from "../../../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const FormField = ({ label, id, type = "text", value, onChange, error }) => {
	return (
		<div className={styles.field}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				className={styles.input}
			/>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export default function CheckoutForm() {
	const navigate = useNavigate();

	const { changeCartStatus } = useCart();

	const [number, setNumber] = useState("");
	const [name, setName] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvv, setCvv] = useState("");

	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};

		if (!/^\d{16}$/.test(number)) newErrors.number = "Must have 16 digits";
		if (name.trim().length < 3) newErrors.name = "Invalid name";
		if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry))
			newErrors.expiry = "Format MM/AA";
		if (!/^\d{3,4}$/.test(cvv)) newErrors.cvv = "Invalid CVV";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			changeCartStatus("complete");
			toast.success("Buy confirmed");
			navigate("/products");
		}
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Card details</h2>

			<FormField
				label="Card number"
				id="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				error={errors.number}
			/>

			<FormField
				label="Full name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				error={errors.name}
			/>

			<div className={styles.row}>
				<FormField
					label="Exp. Date"
					id="expiry"
					value={expiry}
					onChange={(e) => setExpiry(e.target.value)}
					error={errors.expiry}
				/>

				<FormField
					label="CVV"
					id="cvv"
					value={cvv}
					onChange={(e) => setCvv(e.target.value)}
					error={errors.cvv}
				/>
			</div>

			<button className={styles.submitButton} type="submit">
				Pay
			</button>
		</form>
	);
}
