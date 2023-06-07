import Image from "next/image"

const iconsSize = 20

export function LoupIcon() {
	return (
		<Image
			src="assets/icons/loup.svg"
			width={iconsSize}
			height={iconsSize}
			alt="Loup icon"
		/>
	)
}

export function MobileMenuIcon() {
	return (
		<Image
			className="md:hidden"
			src="assets/icons/menu.svg"
			width={iconsSize}
			height={iconsSize}
			alt="Menu icon"
		/>
	)
}

export default function Logo({ sizeMultiplier }) {
	return (
		<Image
			className="min-w-8   lg:w-16"
			width={iconsSize * sizeMultiplier}
			height={iconsSize * sizeMultiplier}
			alt="Brand logo image"
			src="/assets/icons/logo.png"
		/>
	)
}

export function ProfileIcon() {
	return (
		<Image
			width={iconsSize}
			height={iconsSize}
			alt="Profile icon"
			src="assets/icons/profile.svg"
		/>
	)
}

export function ShopCarIcon() {
	return (
		<Image
			width={iconsSize}
			height={iconsSize}
			alt="Shoop car icon"
			src="assets/icons/shopcar.svg"
		/>
	)
}

export function CloseIcon() {
	return (
		<Image
			width={iconsSize}
			height={iconsSize}
			alt="Close icon"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRElEQVR4nO2Zz0sVURTHP89+KkG4EbMohKIoCkKkRYugFrV1lW20VbXJNtVKW2Rg/tj02vYHCP2gFoEIQQsFwSIIiaAIgjYFRr/sh5rFhRG+HDSf8+bO3In5wPAec8/53vMeM/eecy4UFBSERI1P8T7ga/TpgwHgJ1D2pM9n4E90tSWs3Sba34ASHrglk7wHGhLSbYj0FrXdPF7YDLyViR4kpHtHNN8B9XjkKLAgE3ZWqXdatJzucVKgLJN+AnbE1NkGfBStG6TERmBKJn4UY/lzL+mIaLwE6kiRFmBWAuhapf8F8Z0DDpEBvRLED2BfhX57gO/ie5WMWAtMSiBPgXUV+EyIzzNgPRmyN/r3FwPqWcH+iti6XXc/AXDJPM+ty9gdBH6J7UUCwa1AjyWwF0CtsdkAPBebMWANAdEMfJEAB834kMl1dhIgZyXI38CR6P5hYF7GzhAwDyXQN8AW4JXcG/WVaSZFEzAtAX+Q79PRePC0S9B6nSRHDJvg75Izhs0PuEeOOLXMI+QereBpyvNLXFpiGW3M0zJ6rsKNzG14wdFsUgnX41EGTSqxi4CoWSKZc2Xnv5K58ZCSucsx02mXhmeOLWi6V7DvMQXNATLElpRP8lZSXotZ1O8GZsS3lwywbZXzq/TvyrKtUhc1orSxVaqysfUa2ERK3DStxe0xdbaa1qK3cwHlmGnudlSp12mauyfwiG2v309I93Za7fVcH3CUTD/T5xHTjK+MtRztntd9iAP9vg/5vB+D4l+/oOC/4y+WlwHOqCJNPgAAAABJRU5ErkJggg=="
		/>
	)
}
