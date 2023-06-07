"use client"
import Logo, { LoupIcon, ProfileIcon, ShopCarIcon } from "../Icons"
import MobileNav from "./MobileNav"
import Link from "next/link"
import links from "@constants/links"
import { useState } from "react"

function Header() {
	const [wasScrolled, setWasScrolled] = useState(false)

	window.onscroll = () =>
		window.scrollY > 400 ? setWasScrolled(true) : setWasScrolled(false)

	return (
		<header className="sticky flex flex-col md:static top-0 z-20 bg-[#fff]">
			<marquee
				className={`text-xs  transition-all duration-200  ${
					wasScrolled ? "h-0" : "h-4"
				}`}>
				Argentina Envío Gratis en órdenes + $25.000 // Envíos Internacionales
				por DHL (+200 USD ENVIO GRATIS)
			</marquee>

			<article className="flex items-center w-screen gap-4 p-4">
				<MobileNav />

				<LoupIcon />

				<Link href="/" style={{ marginInline: "auto" }}>
					<Logo sizeMultiplier={wasScrolled ? 2 : 2.7} />
				</Link>

				<ProfileIcon />
				<ShopCarIcon />
			</article>
			<nav className="hidden md:block text-xs">
				<ul className="flex flex-wrap gap-4 p-4  justify-center">
					{links.map(({ label, route }) => (
						<li key={route}>
							<Link className="px-2" href={route}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
