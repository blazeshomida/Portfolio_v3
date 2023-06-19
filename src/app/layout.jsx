import "./globals.scss";

import ThemeProvider from "@/context/theme-provider";

export const metadata = {
	title: "Blaze",
	description: "A portfolio of work for Front-End Developer Blaze Shomida",
	viewport:
		"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
	appleWebApp: {
		title: "Blaze",
		statusBarStyle: "black-translucent",
	},
	manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<ThemeProvider>{children}</ThemeProvider>
		</html>
	);
}
