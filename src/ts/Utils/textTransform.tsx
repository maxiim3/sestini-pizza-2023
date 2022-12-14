import React from "react"

export const GoldifyWords = ({children}: ReactChildren) => {
	return <span className={"text-gold"}>{children}</span>
}

export const UnderlineWords = ({children}: ReactChildren) => {
	return <span className={"underline underline-offset-2"}>{children}</span>
}

export const AddPlural = (txt: string) => {
	return txt
		.split(" ")
		.map(word => `${word}s`)
		.join(" ")
}

type ReactChildren = {
	children: React.ReactNode
}
