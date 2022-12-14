import React from "react"
import {Button} from "../../Components/button"
import {
	IconFaceBook,
	IconInstagram,
	IconNavLaCarte,
	IconNavLocalisation,
} from "../../Components/icons"
import {NavLink} from "react-router-dom"
import {PhoneNumber} from "../../Utils/informations"
import info from "../../Data/informations.json"
// import "../../../node_modules/animate.css/animate.css"

export const Hero = ({
	handleScroll,
	scrollToRef,
}: {
	handleScroll: Function
	scrollToRef: React.RefObject<any>
}) => {
	return (
		<>
			<header className="animate__animated animate__fadeInUp col-span-full grid h-96 place-content-center xl:mt-48">
				{/*<MainLogo />*/}
				<img
					src={"./img/logo-groupe.png"}
					alt="Logo Sestini Pizza"
				/>
			</header>

			<section
				className={
					"animate__animated animate__fadeIn animate__delay-1s grid grid-cols-5 grid-rows-6 justify-between gap-y-2 px-3 md:mx-auto md:flex  md:justify-around"
				}>
				<div
					className={"col-start-1 col-end-3 row-start-1 self-center justify-self-center"}>
					<Button nav={true}>
						<IconNavLocalisation />
						<NavLink
							className=""
							to={"/nous-trouver"}>
							<div className="text-yellow-100 text-xl font-semibold uppercase">
								Nous
								<br />
								Trouver
							</div>
						</NavLink>
					</Button>
				</div>
				<div className="col-start-2 col-end-5 row-start-2 self-center justify-self-center md:gap-4">
					<Button
						nav={true}
						activeClass={true}>
						<IconNavLaCarte />
						<NavLink
							className=""
							to={"/la-carte"}>
							<div className="text-dark text-xl font-semibold uppercase">
								Notre
								<br />
								Carte
							</div>
						</NavLink>
					</Button>
				</div>
				<div
					className={
						"col-start-4 col-end-6 row-start-3 self-center justify-self-center md:row-start-1"
					}>
					<div
						className={
							"col-span-2 col-start-4 row-start-4 grid grid-cols-2 grid-rows-2 gap-y-px gap-x-px self-start justify-self-center md:order-first md:-translate-y-3"
						}
						aria-label={"Réseaux sociaux"}>
						<div
							className="col-span-2 row-start-1 self-center justify-self-center font-main text-xl text-beige"
							aria-label={"Numéro de téléphone"}>
							<PhoneNumber />
						</div>
						<div className="col-span-1 row-start-2 self-center justify-self-center">
							<a
								href={info[0].facebook}
								className={"inline-block"}>
								<IconFaceBook beige={true} />
							</a>
						</div>
						<div className="col-span-1 row-start-2 self-center justify-self-center">
							<a
								href={info[0].instagram}
								className={"inline-block"}>
								<IconInstagram beige={true} />{" "}
							</a>
						</div>
					</div>
					{/*<Button nav={true}>*/}
					{/*   <div*/}
					{/*      className="text-yellow-100 text-xl font-semibold uppercase"*/}
					{/*      onClick={() => handleScroll(scrollToRef)}>*/}
					{/*      <span>*/}
					{/*         La Pizza*/}
					{/*         <br />*/}
					{/*         Du Mois*/}
					{/*      </span>*/}
					{/*   </div>*/}
					{/*</Button>*/}
				</div>
				<img
					className={
						"col-start-4 col-end-6 row-start-1 translate-x-6 transform justify-self-end md:hidden"
					}
					src={"./img/basilic.png"}
					aria-hidden={true}
				/>
				<img
					className={
						"left-0 col-start-1 col-end-4 row-start-3 row-end-6 -translate-x-12 transform md:hidden"
					}
					src={"./img/pizza-half.png"}
					aria-hidden={true}
				/>
			</section>
		</>
	)
}
