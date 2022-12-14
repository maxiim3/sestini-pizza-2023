import React from "react"

export const About = ({refAbout}: {refAbout: React.RefObject<any>}) => {
	const TextBold = ({children, title = false}: {children: React.ReactNode; title?: boolean}) => {
		return (
			<span
				className={
					"font-bold tracking-wide" + (title && "  text-orange md:text-dark-grey")
				}>
				{children}
			</span>
		)
	}
	const Paragraph = ({
		children,
		top = false,
		bottom = false,
		both = false,
	}: {
		children: React.ReactNode
		top?: boolean
		bottom?: boolean
		both?: boolean
	}) => {
		if (both) top = bottom = true
		return (
			<>
				{top && <br className={"mt-1"} />}
				<span className={"block"}>{children}</span>
				{bottom && <br className={"mb-1"} />}
			</>
		)
	}
	return (
		<article
			ref={refAbout}
			className="z-10 h-full w-screen bg-beige text-dark-grey md:mx-auto md:grid md:place-content-center md:px-[2%] ">
			<article className={" md:flex md:max-w-screen-md md:flex-row md:justify-start"}>
				<aside
					className={
						"relative -top-[6rem] mx-8 font-accent text-5xl font-semibold leading-loose tracking-widest"
					}>
					<ul>
						<li className={"text-beige"}>La pizza,</li>
						<li className={"text-dark-grey"}> Un art,</li>
						<li className={"text-dark-grey"}>Un savoir-faire,</li>
						<li className={"text-dark-grey"}>Une passion</li>
					</ul>
				</aside>
				<section
					aria-label={"Photo de notre remorque"}
					className={"hidden md:block md:w-1/3 md:pt-8"}>
					<img
						className={" rounded-xl md:col-span-5 md:col-start-6"}
						src={
							"https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						}
						alt="Remorque"
					/>
				</section>
			</article>
			<article
				className={
					"flex flex-col items-center justify-center gap-y-12 px-12 pb-24 sm:px-24 md:max-w-screen-md md:flex-row md:flex-wrap md:justify-evenly md:gap-x-4 md:p-0 lg:gap-x-12"
				}>
				<section
					aria-label={"Photo de pâton"}
					className={"w-3/5  max-w-4xl md:w-1/5 md:max-w-xs "}>
					<img
						className={"mx-auto rounded-xl "}
						src={
							"https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
						}
						alt="Notre pâte se repose plusieurs jours afin de vous offire un goût inoubliable"
					/>
				</section>
				<section className={"mx-auto max-w-3xl  sm:px-0 md:mx-0 md:w-auto"}>
					<p
						className={
							"text-justify font-describe text-2xl leading-relaxed tracking-wider text-dark-grey md:leading-normal"
						}>
						<Paragraph>
							<TextBold title>Une bonne pizza selon Sestini pizza :</TextBold>
						</Paragraph>
						Des produits locaux, un savoir-faire <TextBold>traditionnel</TextBold>, de
						la <TextBold>créativité</TextBold>. <br />
						<Paragraph top>
							<TextBold title>Une bonne pizza c'est aussi et avant tout...</TextBold>{" "}
							une belle pâte ! <br />
							Nous prenons le temps de la faire lever pendant{" "}
							<TextBold>plusieurs jours</TextBold>.
						</Paragraph>
						<Paragraph top>
							<TextBold title>Mais, une bonne pizza c'est aussi...</TextBold> une
							garniture de qualité ! <br />
							Nous sommes en effet toujours en recherche de nouvelles combinaisons !
							Nous utilisons des <TextBold>produits frais</TextBold> et{" "}
							<TextBold>de saison</TextBold>, travaillant étroitement avec nos
							<TextBold> producteurs locaux</TextBold>. <br />
							Le but est de <TextBold>sublimer</TextBold> chacun de leurs beaux
							produits afin de vous <TextBold>garantir</TextBold> des pizzas aux{" "}
							<TextBold>saveurs délicieuses</TextBold>.
						</Paragraph>
						<Paragraph top>
							<TextBold title>
								Votre pizzaïolo collabore depuis des années avec des maîtres
								réputés.
							</TextBold>
							<br />
							Nous façonnons ainsi vos pizzas à la main, et à la façon{" "}
							<TextBold>traditionnelle italienne</TextBold>.
						</Paragraph>
						<Paragraph top>
							<TextBold title>Enfin, une bonne pizza c’est...</TextBold> la passion
							des bons produits et de la gastronomie.
						</Paragraph>
						<Paragraph top>
							Nos <TextBold title>pizzas</TextBold> sont{" "}
							<TextBold title>créatives</TextBold> et{" "}
							<TextBold title>parfumées</TextBold> de{" "}
							<TextBold title>saveurs uniques</TextBold>. <br />
							Grâce à cette <TextBold>combinaison de savoir-faire</TextBold>,{" "}
							<TextBold>
								vous passerez un moment inoubliable… nous vous le promettons !
							</TextBold>
						</Paragraph>
					</p>
				</section>
			</article>
			<article
				aria-label={"Des produits frais"}
				className={
					"hidden md:my-12 md:block md:grid md:max-w-screen-md md:grid-cols-4 md:gap-x-[5%] lg:gap-x-12 "
				}>
				<div
					className={
						"col-span-3 col-start-1 w-full self-center border-t-2 border-dark-gray-90 opacity-50"
					}
				/>
				<img
					className={"hidden rounded-xl md:col-start-4 md:block md:w-full md:max-w-xs"}
					src={
						"https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
					}
					alt="Des produits frais"
				/>
			</article>
		</article>
	)
}
