import React from 'react'
import "../../../node_modules/animate.css/animate.css";

import { LineTitleWrapper } from '../Utils/lineTitleWrapper'

export const Header = ({ title, children } : {title: string, children?: React.ReactNode}) => {
	return (
		<header className="animate__animated animate__fadeIn mt-4 justify-self-center text-xl tracking-wide">
			{children}
			<LineTitleWrapper>
				<h2 className={'my-1 inline w-fit p-0 text-3xl'}>{title}</h2>
			</LineTitleWrapper>
		</header>
	)
}
