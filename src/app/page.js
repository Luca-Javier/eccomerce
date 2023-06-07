import Products from "@/shared/components/Products"
import Slide from "@components/slide"
import Image from "next/image"
import data from "@/mocks/getProducts.json"

export default function Home() {
	return (
		<main>
			<Slide />
			<h3 className="py-8 mt-4 text-center border-t-2 border-second">
				NEW DROP // ALL IS SOFT INSIDE
			</h3>
			<Products data={data} />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</main>
	)
}
