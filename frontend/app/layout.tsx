import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/top-bar";
import { primaryColor } from "@/lib/utils";

export const metadata: Metadata = {
	title: "DAOtator",
	description: "DAOtator",
	icons: "/ascii-remilio-glow-icon.png"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-[#0A0A0A] text-[${primaryColor}] font-mono antialiased`}
			>
				<div>
					<TopBar/>
				</div>
				<main
					className="px-8 pb-8"
				>
					{children}
				</main>
			</body>
		</html>
	);
}
