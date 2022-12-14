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
import {Basilic} from "./basilic"
import {ScrollingIcon} from "./scrollingIcon"
// import "../../../node_modules/animate.css/animate.css"

export const Hero = ({
	handleScroll,
	scrollToRef,
}: {
	handleScroll: Function
	scrollToRef: React.RefObject<any>
}) => {
	return (
		<section className={"home__hero"}>
			<header className={"home__hero__header animate__animated animate__slideInDown "}>
				<video
					src={"./video/pexels-denys-gromov-6176588.mp4"}
					controls={true}
					controlsList={"nodownload nofullscreen noremotreplayback"}
					loop={true}
					muted={true}
				/>
			</header>
			<Basilic />
			{/*            <img
			 className={'hidden md:absolute md:top-[40%] md:-left-36 md:block lg:-left-0'}
			 src={'./img/pizza-half.png'}
			 aria-hidden={true}
			 />*/}
			<ScrollingIcon />
			<main className="home__hero__main">
				<section className="logo-wrapper  animate__animated animate__fadeInUp  ">
					{/*<MainLogo />*/}
					<img
						src={"./img/logo-groupe.png"}
						alt="Logo Sestini Pizza"
					/>
				</section>
				<section
					className={
						"content animate__animated animate__fadeIn animate__delay-1s"
					}>
					<div
						className={
							"content__nousTrouver "
						}>
						<Button nav={true}>
							<IconNavLocalisation />
							<NavLink
								className="text text-yellow-100 text-xl font-semibold uppercase"
								to={"/nous-trouver"}>
								<div>
									Nous
									<br />
									Trouver
								</div>
							</NavLink>
						</Button>
					</div>
					<div className="content__laCarte">
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
							"content__contacts"
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
			</main>
		</section>
	)
}
