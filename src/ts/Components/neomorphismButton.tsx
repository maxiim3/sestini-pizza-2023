import * as PropTypes from "prop-types"
import React from "react"

export function NeoMorphismBTN({children, handleScroll, toRef}: NeoMorphismProps) {
	return (
		<div
			onClick={() => handleScroll(toRef)}
			className={
				" neoMorphism grid h-24 w-max cursor-pointer place-content-center rounded-full font-main text-2xl uppercase text-beige underline-offset-2 hover:text-gold hover:underline"
			}>
			<div className={"p-8"}>{children}</div>
		</div>
	)
}

NeoMorphismBTN.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}
type NeoMorphismProps = {
	children: React.ReactNode
	handleScroll: Function
	toRef: React.RefObject<any>
}
