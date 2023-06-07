"use client"
import Image from "next/image"

function Products({ data }) {
	const options = {}

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("opacity-0")
				entry.target.classList.remove("translate-y-8")
			} else {
				entry.target.classList.add("opacity-0")
				entry.target.classList.add("translate-y-8")
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	document
		.querySelectorAll(".grid picture")
		.forEach(picture => observer.observe(picture))

	return (
		<section className="grid grid-cols-2 md:grid-cols-3  gap-4">
			{data.map(product => (
				<picture
					key={product.id}
					className="transition-all translate-y-8 duration-1000 opacity-0">
					<Images
						src={product.src}
						alt={product.alt}
						srcHover={product.srcHover}
					/>
					<figcaption className="p-4">
						<h3>{product.name}</h3>
						<strong className="text-xs">${product.price}</strong>
					</figcaption>
				</picture>
			))}
		</section>
	)
}

export default Products

function Images({ src, alt, srcHover }) {
	return (
		<>
			<div className="relative">
				<Image
					className="transition-opacity duration-300 hover:opacity-0 z-10 absolute"
					src={src}
					alt={alt}
					fill
				/>
				<img className="z-0" src={srcHover} alt={alt} />
			</div>
		</>
	)
}
