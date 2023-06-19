import React from "react";
import styles from "./index.module.scss";

const Form = ({ children, handleSubmit }) => {



	return (
		<form
    onSubmit={handleSubmit}
			action="https://formsubmit.co/4f5b704d4af3f6f6a2cf255f843f2ddb"
			method="POST"
			className={styles["form"]}
		>
			<input type="hidden" name="_subject" value="New form submission!" />
			<input
				type="hidden"
				name="_next"
				value="https://portfolio-blazeshomida.vercel.app/thanks.html"
			/>
			{children}
		</form>
	);
};

export default Form;
