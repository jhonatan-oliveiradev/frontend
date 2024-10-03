import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Gam3r.store",
	description: "Encontre o seu próximo jogo preferido aqui."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${font.className} antialiased`}>{children}</body>
		</html>
	);
}
