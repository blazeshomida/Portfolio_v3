import React from "react";
import styles from "./index.module.scss";

const InputGroup = ({
	label,
	placeholder,
	type,
	handleFormInput,
	name,
	errors,
}) => {
	const isError = errors[name];

	return (
		<div className={styles["input-group"]}>
			{isError ? (<p className={styles["error-message"]}>{errors[name]}</p>) : null}
			<label className={styles["input-label"]}>{label}</label>
			{type === "textarea" ? (
				<textarea
					name={name}
					className={`${styles["input-field"]} ${isError && styles["error"]}`}
					placeholder={placeholder}
					onChange={(e) => handleFormInput(e)}
				></textarea>
			) : (
				<input
					name={name}
					className={`${styles["input-field"]} ${isError && styles["error"]}`}
					placeholder={placeholder}
					type={type}
					onChange={(e) => handleFormInput(e)}
				/>
			)}
		</div>
	);
};

export default InputGroup;
