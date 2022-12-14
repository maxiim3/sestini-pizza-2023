import {NavLink} from "react-router-dom"
import React, {useEffect, useState} from "react"
import {useProducts} from "../../Hooks/useProducts"

export const Modal = () => {
	const {pizzaDeSaison} = useProducts()!

	const [modal, setModal] = useState(true)
	useEffect(() => {
		if (modal === true) {
			setTimeout(() => {
				const $modal: HTMLDialogElement = document.querySelector(
					"dialog"
				)! as HTMLDialogElement
				$modal.showModal()
			}, 350)
		} else if (modal === false) {
			closeDialog()
		}
	}, [modal])

	const [counter, setCounter] = useState(10)
	useEffect(() => {
		if (modal === true) {
			if (counter < 3) {
				setModal(false)
			} else {
				const timer = setTimeout(() => {
					if (counter === 2) clearTimeout(timer)
					else {
						setCounter(counter - 1)
					}
				}, 1000)
			}
		}
		return () => {}
	}, [counter])

	function closeDialog() {
		const $modal = document.querySelector("#modal")! as HTMLDialogElement
		$modal.className = "animate__animated animate__fadeOut"

		const timerClose = setTimeout(() => {
			$modal.close()
			clearTimeout(timerClose)
		}, 450)
	}

	return (
		<dialog
			id={"modal"}
			data-timing={`Fermeture dans ${counter}s`}
			className={"animate__animated animate__fadeIn"}>
			<button
				className={
					"absolute top-4 right-12 text-xl font-semibold text-gold hover:cursor-pointer hover:text-beige hover:underline hover:underline-offset-4 md:top-12 md:text-3xl"
				}
				onClick={() => setModal(false)}>
				Fermer X
			</button>
			{/*todo Fermeture exceptionnelle*/}
			{counter > 5 && new Date().getMonth() === 9 && new Date().getDate() === 28 ? (
				<article
					className={
						"mx-auto mt-48 mb-2 flex h-max flex-col items-center justify-center gap-12 text-center text-3xl text-beige"
					}>
					<h4 className={"block pb-4 font-bold text-gold underline"}>
						FERMETURE EXCEPTIONNELLE {}
					</h4>
					<h5 className={"font-semibold"}>Ce Vendredi 28 octobre à Gigean</h5>
					<p>Nous nous excusons... Retrouvez-nous dès demain</p>
				</article>
			) : (
				<article
					id={"pizza-du-mois"}
					className={
						"mx-auto mt-12 mb-2 flex flex-col items-center justify-evenly text-center text-3xl text-beige"
					}>
					<h2
						className={
							"text-uppercase text-center font-accent text-3xl font-normal leading-loose tracking-wider text-beige"
						}>
						Découvrez notre
					</h2>
					<h3
						className={
							"my-8 font-decorative text-5xl text-beige md:inline-block md:font-semibold"
						}>
						Pizza de Noël<i className="fa-regular fa-ghost"></i>
					</h3>

					<dl
						className={
							"my-12 w-full bg-beige py-4 font-describe text-lg font-normal leading-relaxed tracking-widest text-dark-grey sm:text-xl md:text-2xl xl:text-3xl"
						}>
						<dt className={"hidden"}>Ingrédients</dt>
						<dd>{pizzaDeSaison.base.describe}</dd>
						{pizzaDeSaison.ingredients && pizzaDeSaison.ingredients.map(ingredient => (
							<dd key={ingredient}>{ingredient}</dd>
						))}
						{"afterCook" in pizzaDeSaison && (
							<>
								<h4
									className={
										"mt-6 font-normal text-light-grey underline underline-offset-2"
									}>
									Après Cuisson
								</h4>
								<dt className={"hidden"}>Ingrédients ajoutés après-cuisson</dt>
								{pizzaDeSaison.afterCook && pizzaDeSaison.afterCook.map(ingredient => (
									<dd>{ingredient}</dd>
								))}
							</>
						)}
					</dl>

					<NavLink
						className={
							"modalLink mb-12 text-center font-accent text-3xl text-gold underline underline-offset-4 md:text-4xl"
						}
						to={"/la-carte"}>
						Je découvre la carte Automne-Hiver
					</NavLink>
					<img
						className={"modal__img"}
						src={pizzaDeSaison.url}
						alt="La Pizza d'Halloween"
					/>
				</article>
			)}
		</dialog>
	)
}
