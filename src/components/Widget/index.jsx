import React from "react";
import { motion, useWillChange } from "framer-motion";
import styles from "./index.module.scss";

const Widget = ({ layoutId, children, aspect, name, order }) => {
	const className = `${styles["widget"]} ${styles[aspect]}  ${styles[order]} ${styles[name]}`;
	// const willChange = useWillChange()

	return (
		<motion.div
			initial={{ borderRadius: 16 }}
			animate={{}}
			layout='preserve-aspect'
			layoutId={layoutId}
			className={className}
			transition={{ duration: 0.5 }}
			// style={{ willChange }}
		>
			{children}
		</motion.div>
	);
};

export default Widget;
