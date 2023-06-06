import { CloseIcon, MobileMenuIcon } from "@components/Icons"
import links from "@constants/links"
import Link from "next/link"
import { useId } from "react"

function MobileNav() {
	const id = useId()

	return (
		<div className="z-20">
			<label htmlFor={id}>
				<MobileMenuIcon />
			</label>
			<input type="checkbox" className="hidden peer/burguerMenu" id={id} />

			<div className="duration-500 opacity-0 absolute inset-0 bg-gray-400 peer-checked/burguerMenu:opacity-100 pointer-events-none transition-opacity" />

			<article className="duration-500 bg-[#fff] -translate-x-full opacity-0 peer-checked/burguerMenu:opacity-100 transition peer-checked/burguerMenu:translate-x-0 w-screen h-screen absolute inset-0 bg-white">
				<div className="p-4 border border-second border-b-2">
					<label htmlFor={id}>
						<CloseIcon />
					</label>
				</div>
				<ul className="p-4 space-y-4">
					{links.map(({ label, route }) => (
						<li key={route}>
							<Link href={route}>{label}</Link>
						</li>
					))}
				</ul>
			</article>
		</div>
	)
}

export default MobileNav
