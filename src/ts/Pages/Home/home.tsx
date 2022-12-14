import React from "react"
import {Hero} from "./Hero"
import {Footer} from "../../Components/footer"
import {About} from "./home-about"
import {NeoMorphismBTN} from "../../Components/neomorphismButton"

const Home = ({
	refPDM,
	refAbout,
	refTop,
	handleScroll,
}: {
	refPDM: React.RefObject<any>
	refAbout: React.RefObject<any>
	refTop: React.RefObject<any>
	handleScroll: Function
}) => {
	return (
		<>
			<main
				ref={refTop}
				className={"home"}>
				{/*<Modal />*/}
				<Hero
					handleScroll={handleScroll}
					scrollToRef={refPDM}
				/>
				{/*         <LayoutHomePage>
				 <PdS refPDM={refPDM} />
				 </LayoutHomePage>*/}
				<div className={"mx-auto mb-24"}>
					<NeoMorphismBTN
						handleScroll={handleScroll}
						toRef={refAbout}>
						À PROPOS
					</NeoMorphismBTN>
				</div>
				<About refAbout={refAbout} />
				<div className={"my-24 mx-auto"}>
					<NeoMorphismBTN
						handleScroll={handleScroll}
						toRef={refTop}>
						Haut de la page
					</NeoMorphismBTN>{" "}
				</div>
				<Footer />
			</main>
		</>
	)
}

export default Home
