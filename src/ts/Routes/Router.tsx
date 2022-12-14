import React, {MutableRefObject, useEffect, useState} from "react"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from "../Pages/accueil/home"
import {NousTrouver} from "../Pages/nous-trouver/nousTrouver"
import Page404 from "../Pages/page404"
import {Products} from "../Pages/la-carte/products"
// import "node_modules/animate.css/animate.css"
import MainUI from "../Layout/MainUI"

export const Router = () => {
	const [url, setUrl] = useState(window.location.pathname)
	useEffect(() => {
		setUrl(window.location.pathname)
	})

	const pizzaDeSaison = React.createRef() as MutableRefObject<any>
	const top = React.createRef() as MutableRefObject<any>
	const about = React.createRef() as MutableRefObject<any>

	const executeScroll = (ref: MutableRefObject<any>) => {
		const pause = setTimeout(() => {
			ref.current.scrollIntoView({behavior: "smooth"})
		}, 350)
		clearTimeout(pause)
	}

	return (
		<BrowserRouter>
			<MainUI>
				<Routes>
						<Route
							path="/"
							element={
								<Home
									handleScroll={executeScroll}
									refPDM={pizzaDeSaison}
									refTop={top}
									refAbout={about}
								/>
							}
						/>
						<Route
							path="/nous-trouver"
							element={<NousTrouver />}
						/>
						<Route
							path="/la-carte"
							element={<Products />}
						/>
						<Route
							path="/oups"
							element={<Page404 />}
						/>
						<Route
							path="*"
							element={<Navigate to={"/oups"} />}
						/>
					</Routes>
			</MainUI>
		</BrowserRouter>
	)
}
