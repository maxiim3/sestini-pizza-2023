import React from "react"
import {useProducts} from "../../Hooks/useProducts"

export const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<span
				className={
					"mx-auto block h-3 w-full border-t-2 border-b-2 border-beige-light sm:border-gold-90 md:mr-8 md:inline-block md:w-1/5 md:border-gold"
				}
			/>
			{children}
			<span
				className={
					"mx-auto block h-3 w-full border-t-2 border-b-2 border-beige-light sm:border-gold-90 md:ml-8 md:inline-block md:w-1/5 md:border-gold"
				}
			/>
		</>
	)
}

export const PdS = () => {
	const {pizzaDeSaison} = useProducts()!
	return (
		<>
			<article
				id={"pizza-du-mois"}
				className={
					"mx-auto mt-24 mb-2 flex flex-col items-center justify-between text-center text-3xl text-dark-grey"
				}>
				<h2
					className={
						"text-uppercase my-16 px-16 text-center font-accent text-3xl font-normal leading-loose tracking-wider text-dark-grey"
					}>
					Découvrez notre
				</h2>
				<section
					className={"m-0 w-full p-0 sm:w-3/5"}
					aria-label={"Titre de la pizza du mois"}>
					<Title>
						<h3
							className={
								"my-12 font-decorative text-5xl text-gold sm:text-beige md:inline-block md:font-semibold"
							}>
							pizza d'automne
						</h3>
					</Title>
				</section>
				<dl
					className={
						"my-12 font-describe text-3xl font-light leading-relaxed tracking-widest"
					}>
					<dt className={"hidden"}>Ingrédients</dt>
					<dd>{pizzaDeSaison.base.describe}</dd>
					{pizzaDeSaison.ingredients &&
						pizzaDeSaison.ingredients.map(ingredient => (
							<dd key={ingredient}>{ingredient}</dd>
						))}
					{pizzaDeSaison.afterCook && (
						<>
							<h4
								className={
									"mt-6 font-normal text-light-grey underline underline-offset-2"
								}>
								Après Cuisson
							</h4>
							<dt className={"hidden"}>Ingrédients ajoutés après-cuisson</dt>
							{pizzaDeSaison.afterCook.map(ingredient => (
								<dd>{ingredient}</dd>
							))}
						</>
					)}
					<dt className={"hidden"}>Prix du produit</dt>
					<dl className={"mx-8 mt-8 text-center font-accent text-4xl text-gold"}>
						{pizzaDeSaison.prix}€
					</dl>
				</dl>
			</article>
		</>
	)
}
