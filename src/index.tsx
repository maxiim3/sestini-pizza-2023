import React from "react"
import "./sass/index.css"
import {createRoot} from "react-dom/client"
import {Router} from "./ts/Routes/Router"

const rootContainer = document.getElementById("root") as HTMLDivElement
const root = createRoot(rootContainer)

root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
)
