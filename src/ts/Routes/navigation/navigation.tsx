import React, {MouseEventHandler} from "react"
import {NavLink} from "react-router-dom"
import {
	IconCloseNav,
	IconFaceBook,
	IconInstagram,
	IconNavLaCarte,
	IconNavLocalisation,
	MainLogo,
} from "../../Components/icons"
import {PhoneNumber} from "../../Utils/informations"
import {Button} from "../../Components/button"
import info from "../../Data/informations.json"

const Navigation = ({
	navRef,
	onClose,
}: {
	navRef: React.RefObject<any>
	onClose: MouseEventHandler
}) => {
	return (
		<nav
			className="navigation z-20"
			ref={navRef}>
			<div className="navigationWrapper">
				<NavLink
					onClick={onClose}
					className="navbar-brand"
					to={"/Home"}>
					<MainLogo />
				</NavLink>
				<Button
					onClick={onClose}
					nav={true}
					activeClass={false}>
					<IconNavLocalisation />
					<NavLink
						className=""
						to={"/nous-trouver"}>
						Nous
						<br />
						Trouver
					</NavLink>
				</Button>
				<Button
					onClick={onClose}
					nav={true}
					activeClass={true}>
					<IconNavLaCarte />
					<NavLink
						className=""
						to={"/la-carte"}>
						Notre
						<br />
						Carte
					</NavLink>
				</Button>

				<div
					className={"cursor-pointer"}
					onClick={onClose}>
					<IconCloseNav />
				</div>
				<div className="social-grid">
					<PhoneNumber />
					<a
						href={info[0].facebook}
						className={"inline-block"}>
						{" "}
						<IconFaceBook beige={true} />{" "}
					</a>
					<a
						href={info[0].instagram}
						className={"inline-block"}>
						<IconInstagram beige={true} />{" "}
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
