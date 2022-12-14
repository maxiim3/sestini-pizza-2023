import React from 'react'

export const LineTitleWrapper = ({ children }: {children: React.ReactNode}) => {
	return (
		<>
			<span className={'inline-block w-16 mx-4 border-t-[0.5px] transform -translate-y-2'} />
			{children}
			<span className={'inline-block w-16 mx-4 border-t-[0.5px] transform -translate-y-2'} />
		</>
	)
}