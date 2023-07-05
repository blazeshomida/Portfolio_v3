import styles from "./index.module.scss";

const Form = ({ children, handleSubmit }) => {
	return (
		<form
			onSubmit={handleSubmit}
			action="https://formsubmit.co/blaze.shomida@gmail.com"
			method="POST"
			className={styles["form"]}
		>
			<input
				type="hidden"
				name="_subject"
				value="New form submission!"
			/>
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
