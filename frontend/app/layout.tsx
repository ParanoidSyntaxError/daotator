import type { Metadata } from "next";
import "./globals.css";
import { textGlow } from "@/lib/utils";

export const metadata: Metadata = {
	title: "DAOtator",
	description: "DAOtator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-[#0A0A0A] font-mono antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
