import React, {useState} from "react"
import {getDays, JoursType} from "../../Data/jours"
import {Button} from "../../Components/button"
import {PagesLayout} from "../../Layout/pagesLayout"
import {Header} from "../../Components/header"

type JourKeysType = "_id" | "jour" | "estOuvert" | "horaires" | "url" | "adresse"
/**
 * @return {JSX.Element}
 * @constructor
 */
export const NousTrouver = () => {
	const index = new Date().getDay() - 1
	const defaultDay : JoursType = getDays()[index === 0 || 1 || 6 ? 2 : index] as JoursType
	const [activeDay, setActiveDay] = useState<JoursType>(defaultDay)

	const getActiveDay = (key: JourKeysType) => {
		return activeDay[key]
	}

	/**
	 * Retourne un tableau contenant uniquement les jours d'ouvertures
	 * @return {({jour: string, horaires: string, adresse: {ville: string, rue: string, lng: string, num: string, cp: string, lat: string}, _id: number, estOuvert: boolean, url: string}|{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string})[]}
	 */
	const openDays = () : JoursType[] => {
		return getDays().filter(j => j.estOuvert)
	}

	// consoleMessage()
	return (
		<PagesLayout title={"Nos Emplacements"}>
			<section className=" animate__animated animate__fadeIn grid h-auto  w-auto place-content-center gap-8">
				<Header title={"Horaires"} />
				<div
					className={
						"animate__animated animate__slideInUp text-center text-2xl font-normal leading-relaxed tracking-wide"
					}>
					<p>Nous sommes ouverts</p>
					<p>à partir de 18h</p>
					<p>
						du {openDays()[0]["jour"]} au {openDays()[openDays().length -1]["jour"]}
					</p>
				</div>
				<div className={"mx-auto"}>
					<span>
						<svg
							className={
								"animate__animated animate__fadeIn animate__delay-1s w-12 text-beige"
							}
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9 3C12.3082 3 15 5.69175 15 9C15 12.3082 12.3082 15 9 15C5.69175 15 3 12.3082 3 9C3 5.69175 5.69175 3 9 3ZM9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 13.1422 4.85775 16.5 9 16.5C13.1422 16.5 16.5 13.1422 16.5 9C16.5 4.85775 13.1422 1.5 9 1.5ZM11.85 11.55L9.75 8.75025V5.25H8.25V9.24975L10.65 12.4492L11.85 11.55Z"
								fill="#F9F0DC"
							/>
						</svg>
					</span>
				</div>
				<footer>
					<p
						className={
							"text-small animate__animated animate__fadeIn animate__delay-1s text-center font-thin tracking-wider"
						}>
						Sélectionnez un jour pour visualiser sur la carte nos emplacements
					</p>
				</footer>
			</section>
			<section>
				<ul className="mx-auto my-4 flex w-[80vw] flex-row flex-wrap place-content-center  gap-x-8 gap-y-4 text-beige sm:w-full">
					{/*<ul className="grid w-full grid-flow-col place-content-center gap-x-8 text-beige">*/}
					{getDays()
						.filter(j => j.estOuvert)
						.map(j => (
							<li
								className={
									"animate__animated animate__fadeIn animate__delay-2s font-main text-2xl font-bold uppercase tracking-wide"
								}>
								<Button
									key={j._id}
									activeClass={j.jour === getActiveDay("jour")}
									height={20}
									onClick={() => setActiveDay(j)}>
									{j.jour}
								</Button>
							</li>
						))}
				</ul>
			</section>

			<section className="grid h-max w-auto place-content-center gap-2">
				<article className={"animate__animated animate__fadeIn h-full w-full"}>
					<dl className={"mx-auto grid max-w-5xl place-content-center gap-y-6"}>
						{getDays()
							.filter(j => j._id === getActiveDay("_id"))
							.map(jour => (
								<dt
									className={"text-center "}
									key={jour._id + 10}>
									<div
										className={
											"grid w-full grid-flow-col border-t border-b border-beige px-6 py-8"
										}>
										<div className={"grid w-max place-content-center"}>
											<svg
												className={""}
												width="13"
												height="20"
												viewBox="0 0 13 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M5.31074 0.102785C2.17098 0.763088 -0.0227903 3.66073 0.000178674 7.11709C0.0148861 9.32421 1.50424 12.5904 4.51871 17.0261C5.65772 18.7022 5.86399 18.9454 6.24947 19.0673C6.78629 19.2371 7.07227 19.0184 7.93755 17.7768C9.63817 15.3367 11.5337 12.0396 12.2814 10.221C12.6633 9.29238 13.0019 7.7882 13 7.02921C12.9933 4.42193 11.5744 1.93766 9.40085 0.727555C8.2701 0.0979802 6.56904 -0.161857 5.31074 0.102785ZM7.38258 5.00196C8.75227 5.72382 9.07438 7.69652 8.00909 8.83906C7.53982 9.34232 7.13382 9.51989 6.46491 9.51468C5.4461 9.50667 4.7002 8.876 4.40814 7.77559C4.00268 6.248 5.14959 4.68987 6.60109 4.79617C6.85075 4.81439 7.20236 4.90707 7.38258 5.00196Z"
													fill={"#F9F0DC"}
												/>
											</svg>
										</div>
										<div className={"w-fit  text-2xl uppercase tracking-wide"}>
											<p
												className={
													"animate__animated animate__slideInRight w-fit text-center "
												}>
												{jour.adresse.lieuDit}
												<br />
												{jour.adresse.num} {jour.adresse.rue}
												<br />
												{jour.adresse.cp} {jour.adresse.ville}
											</p>
										</div>
									</div>
									<p
										className={
											"text-small animate__delay-1s animate__animated animate__fadeIn text-center font-thin tracking-wider text-beige-light"
										}>
										Cliquez sur la carte pour ouvrir dans Google Maps
									</p>
									<a href={jour.adresse.googleMaps}>
										<img
											src={jour.url}
											alt="Carte de nos emplacements"
											className={
												"h-full transform cursor-pointer object-cover hover:scale-105"
											}
										/>
									</a>
								</dt>
							))}
					</dl>
				</article>
			</section>
		</PagesLayout>
	)
}
