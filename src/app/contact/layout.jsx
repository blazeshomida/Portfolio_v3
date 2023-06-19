import Dashboard from "@/components/Dashboard";

export const metadata = {
	title: "Contact",
	description: "A portfolio of work for Front-End Developer Blaze Shomida",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: "no",
		viewportFit: "cover",
	},
	manifest: "/public/site.webmanifest",
};

export default function Layout({ children }) {
	return <Dashboard>{children}</Dashboard>;
}
