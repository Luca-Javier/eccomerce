"use client"

import slides from "@constants/slides"
import Image from "next/image"
import { getSlider } from "simple-slider"
import { useEffect } from "react"

function Slide() {
	useEffect(() => {
		getSlider({
			duration: 1,
			delay: 4,
		})
	}, [])

	const media = "(min-width: 768px)"

	return (
		<div className="w-screen h-screen md:h-[50vh] relative" data-simple-slider>
			{slides.map(({ src, alt, mediaSrc }) => (
				<picture key={src} className="w-full h-full">
					<source srcSet={mediaSrc} media={media} />
					<Image
						src={src}
						alt={alt}
						title={alt}
						width={600}
						height={600}
						className="w-full h-full absolute object-cover"
					/>
				</picture>
			))}
		</div>
	)
}

export default Slide
