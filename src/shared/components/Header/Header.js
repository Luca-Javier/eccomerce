import Image from "next/image"
import Logo, { LoupIcon, ProfileIcon, ShopCarIcon } from "../Icons"
import MobileNav from "./MobileNav"
import Link from "next/link"
import links from "@constants/links"

function Header() {
	return (
		<header className="sticky md:static top-0 z-10 bg-[#fff]">
			<marquee className="text-xs">
				Argentina Envío Gratis en órdenes + $25.000 // Envíos Internacionales
				por DHL (+200 USD ENVIO GRATIS)
			</marquee>

			<article className="flex items-center w-screen gap-4 p-4">
				<MobileNav />

				<LoupIcon />

				<Link href="/" className="flex-1 flex justify-center">
					<Logo />
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
