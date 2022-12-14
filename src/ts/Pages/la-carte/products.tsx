import React from "react"
import "../../../../node_modules/animate.css/animate.css"
import {RenderButtons} from "./renderButtons"
import {IconHandClick} from "../../Components/icons.js"
import {PagesLayout} from "../../Layout/pagesLayout"
import {Header} from "../../Components/header"
import {RenderPizzas} from "./renderPizzas"
import {RenderProductsLayout} from "./renderProducts"
import {useProducts} from "../../Hooks/useProducts"

/**
 * La carte Routes
 * @return {JSX.Element}
 * @constructor
 */
export const Products = () => {
	const {
		carte,
		filteredProducts,
		allSupplements,
		pizzaDeSaison,
		handleCategorize,
		activeCategory,
	} = useProducts()!

	return (
		<PagesLayout title={"Notre Carte"}>
			<section className="grid h-auto w-auto grid-flow-row place-content-center gap-4">
				<Header title={"Horaires"}>
					<IconHandClick />
				</Header>
				<RenderButtons
					activeCategory={activeCategory}
					onChange={handleCategorize}
				/>
			</section>

			<section className="grid h-max w-auto place-content-center gap-12">
				<Header
					title={`Nos ${activeCategory[0].toUpperCase() + activeCategory.slice(1)}`}
				/>
				<p
					className={
						"animate__animated animate__fadeIn text-center font-['Cinzel'] text-3xl font-normal uppercase"
					}>
					Carte {carte}
				</p>
				<div
					className={
						"animate__animated animate__slideInUp h-full w-screen bg-beige text-dark-grey md:max-w-6xl md:rounded-xl"
					}>
					<article className={"mx-auto p-12"}>
						<ul className={"my-4"}>
							{activeCategory === "pizzas" ? (
								<RenderPizzas
									pizzaDeSaison={pizzaDeSaison}
									pizzas={filteredProducts}
									supplements={allSupplements}
								/>
							) : (
								filteredProducts &&
								filteredProducts?.map(product => (
									<RenderProductsLayout product={product} />
								))
							)}
						</ul>
					</article>
				</div>
			</section>
		</PagesLayout>
	)
}
