import "./globals.scss";

import ThemeProvider from "@/context/theme-provider";

export const metadata = {
	title: "Blaze",
	description: "A portfolio of work for Front-End Developer Blaze Shomida",
	manifest: "/manifest.json",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: "no",
		viewportFit: "cover",
	},
};

export default function RootLayout({ children }) {
	
	return (
		<html lang="en">
			<ThemeProvider>{children}</ThemeProvider>
		</html>
	);
}
