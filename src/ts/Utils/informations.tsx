import React from 'react'
import info from '../Data/informations.json'

export const PhoneNumber = () => {
	return (
		<a href={`tel:${info[0].phoneNumber}`} className={'info-tel'}>
			{info[0].phoneNumber}
		</a>
	)
}

export const Email = () => {
	return <span className={'info-mail'}>{info[0].mail}</span>
}

export const Adresse = () => {
	return <span className={'info-address'}>{info[0].adresse}</span>
}
