import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { twMerge } from "tailwind-merge"

import { SessionProviver } from "@/contexts/Session"
import { Navbar } from "@/components/Navbar"

import "./globals.scss"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: 'Fast Share',
	description: 'A fast and smart file storage for you.'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body 
				className={twMerge(
					font.className, 
					'bg-slate-300 dark:bg-slate-800',
					'text-slate-800 dark:text-slate-200'
				)}
			>
				<SessionProviver>
					<Navbar />

					{children}
				</SessionProviver>
			</body>
		</html>
	);
}
