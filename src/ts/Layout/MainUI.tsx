import React, {MutableRefObject, useCallback, useEffect, useState} from "react"
import {Navbar} from "../Routes/navigation/navbar"
import Navigation from "../Routes/navigation/navigation"

const MainUI = ({children}: {children: React.ReactNode | React.ReactNode[]}) => {
	const iconNav = React.createRef() as MutableRefObject<any>
	const navMobile = React.createRef() as MutableRefObject<any>

	const [navIsHidden, setNavIsHidden] = useState(false)
	useEffect(() => {
		if (navIsHidden) {
			navMobile.current.hidden = false
			iconNav.current.hidden = true
		} else {
			navMobile.current.hidden = true
			iconNav.current.hidden = false
		}
	})

	const handleShowNav = useCallback(
		(e: MouseEvent) => {
			e.preventDefault()
			navIsHidden ? setNavIsHidden(false) : setNavIsHidden(true)
		},
		[navIsHidden]
	)

	return (
		<>
			<Navigation
				navRef={navMobile}
				onClose={handleShowNav}
			/>
			{/*			<MainLogoMinify
			 refLogo={iconNav}
			 onClick={handleShowNav}
			 beige={true}
			 />*/}
			<Navbar />
			{children}
		</>
	)
}

export default MainUI
