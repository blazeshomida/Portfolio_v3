"use client";

import { useContext } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	AboutIcon,
	ContactIcon,
	HomeIcon,
	ProjectsIcon,
	SkillsIcon,
} from "@/../public/assets/svgs/NavIcons";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SunOuter, SunInner } from "../../../public/assets/svgs";
import { ThemeContext } from "@/context/theme-provider";
import logo from '/public/assets/logo.png'

const Navbar = () => {
	const pathname = usePathname();
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const { darkMode, toggleTheme } = useContext(ThemeContext);

	const navLinks = [
		{
			path: "/",
			label: "Home",
			icon: HomeIcon,
		},
		{
			path: "/skills",
			label: "Skills",
			icon: SkillsIcon,
		},
		{
			path: "/projects",
			label: "Projects",
			icon: ProjectsIcon,
		},
		{
			path: "/about",
			label: "About",
			icon: AboutIcon,
		},
		{
			path: "/contact",
			label: "Contact",
			icon: ContactIcon,
		},
	];

	return (
		<nav className={styles["navbar"]}>
			<Image 
			src={logo}
			width={40}
			height={40}
			alt="Blaze's Logo"
			/>


			<ul className={`${styles["nav-list"]}`} role="list">
				{navLinks.map((link) => (
					<li
						key={link.path}
						className={link.path === pathname ? styles["active"] : ""}
					>
						{link.path === pathname && (
							<motion.div
								layoutId="bubble"
								className={styles["bubble"]}
							></motion.div>
						)}
						<Link href={link.path} className={` ${styles["nav-link"]}`}>
							<link.icon className={styles["nav-icon"]} /> {link.label}
						</Link>
					</li>
				))}
				<li></li>
			</ul>
			<button
				aria-label={`Toggle to ${darkMode ? "light" : "dark"} mode.`}
				onClick={toggleTheme}
				className={`${styles["theme-icon"]} ${
					darkMode ? styles["dark"] : styles["light"]
				} `}
			>
				<SunInner className={styles["sun-inner"]} />
				<SunOuter className={styles["sun-outer"]} />
			</button>
		</nav>
	);
};

export default Navbar;
