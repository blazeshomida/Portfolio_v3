import Dashboard from "@/components/Dashboard";

export const metadata = {
	title: "About",
	description: "A portfolio of work for Front-End Developer Blaze Shomida",
};

export default function Layout({ children }) {
	return <Dashboard>{children}</Dashboard>;
}
