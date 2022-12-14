import React from "react"
import ReactDOM from "react-dom"
import "./sass/index.css"
import {Router} from "./ts/Routes/Router"

ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById("root")
)
