"use client";

import { createContext, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.scss";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(true)

	useEffect(() => {
		if (typeof window !== 'undefined') { // Ensure window object is available
			const storedPreference = localStorage.getItem('darkMode');
			if (storedPreference !== null) { // if a preference is stored, use it
				setDarkMode(JSON.parse(storedPreference));
			} 
			// if no preference is stored, the default (true) is already set
		}
	}, []); // the empty dependency array means this useEffect runs once on mount

	const toggleTheme = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			if (typeof window !== "undefined") {
				// Ensure window object is available (not during server-side rendering)
				localStorage.setItem("darkMode", JSON.stringify(newMode));
			}
			return newMode;
		});
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			<body className={!darkMode ? "light" : ""}>
				<div className={"layout-grid"}>
					<header>
						<div className="container">
							<Navbar />
						</div>
					</header>
					<main>{children}</main>
				</div>
			</body>
		</ThemeContext.Provider>
	);
}
