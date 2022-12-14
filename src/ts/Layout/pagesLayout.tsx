import React from 'react'
import '../../../node_modules/animate.css/animate.css'

export const PagesLayout = ({ title, children }: { title: string, children:React.ReactNode }) => {
	return (
		<article
			className={
				' relative min-h-screen w-full overflow-x-hidden bg-dark-grey text-beige sm:h-auto'
			}>
			<header
				className={
					'animate__animated animate__fadeIn absolute top-12 left-6 z-30 origin-top-right -translate-x-full -rotate-90 transform sm:left-12 md:top-32 lg:left-16'
				}>
				<h1
					className={' text-base uppercase tracking-widest sm:text-lg md:text-xl lg:text-2xl'}>
					{title}
				</h1>
			</header>
			<div className={'relative md:top-32'}>{children}</div>
		</article>
	)
}
