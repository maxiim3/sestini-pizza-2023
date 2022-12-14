import React from "react"
import {NavLink} from "react-router-dom"

export const TextLink = ({children, link}: {children: React.ReactNode, link: string}) => {
	return (
		<NavLink
			className="group mx-auto text-center font-main text-xl tracking-wide text-beige lg:text-2xl"
			to={link}>
			<p
				className={
					"transition-color relative duration-300 ease-in-out hover:scale-105 group-hover:text-gold group-hover:drop-shadow-md"
				}>
				{children}
			</p>
			<div
				className={
					"relative top-1 hidden w-full border-t-2 border-beige drop-shadow-md transition duration-300 ease-in-out group-hover:block group-hover:border-gold-90"
				}
			/>
		</NavLink>
	)
}