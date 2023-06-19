"use client";


import { createContext, useState } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.scss";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(true);

	const toggleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>

				<body className={!darkMode ? 'light' : ''}>
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
