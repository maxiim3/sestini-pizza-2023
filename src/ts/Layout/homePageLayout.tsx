import React from 'react'

export const HomePageLayout = ({ children }: {children: React.ReactNode}) => {
	return (
		<article className="z-10 h-full w-screen text-beige md:mx-auto md:h-full md:max-w-7xl mobile:translate-y-24">
			{children}
		</article>
	)
}
