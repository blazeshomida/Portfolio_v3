import React from "react";
import styles from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const DashboardRow = ({ order, page, children }) => {
	const rowStyles = `${styles["row"]} ${styles[order]} ${styles[page]}`;

	return (
		<motion.div layout className={rowStyles}>
			{children}
		</motion.div>
	);
};

export default DashboardRow;
