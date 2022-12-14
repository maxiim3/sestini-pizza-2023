import React from 'react'
import { IconFaceBook, IconInstagram, IconLogoWithoutText } from './icons'
import { Email, PhoneNumber } from '../Utils/informations'
import info from '../Data/informations.json'

export const Footer = () => {
	return (
		<footer className={'borderTop z-30 grid w-screen place-content-center bg-dark-grey py-12'}>
			<div className="flex max-w-5xl flex-col items-center justify-center gap-4 text-center leading-relaxed tracking-wide text-light-grey">
				<div className="flex w-4/5 items-center justify-around">
					<div className="self-center justify-self-center">
						<a href={info[0].facebook} className={'inline-block'}>
							<IconFaceBook beige={false} />
						</a>
					</div>
					<IconLogoWithoutText classTW={'w-24'} />
					<div className="self-center justify-self-center">
						<a href={info[0].instagram} className={'inline-block'}>
							<IconInstagram beige={false} />{' '}
						</a>
					</div>
				</div>
				<div className={'col-start-2 row-start-2'}>
					<p>
						Sestini <sup>&copy;</sup> 2022
					</p>
					<p>
						<Email />
					</p>
					<p>
						<PhoneNumber />
					</p>
				</div>
				<div className={'col-start-2 row-start-3'}>
					<p>SARL 10558442XD</p>
				</div>
				<div className={'col-start-2 row-start-5'}>
					<a>CGU</a>
				</div>
				<div className={'col-start-2 row-start-6'}>
					Video by Denys Gromov: https://www.pexels.com/video/a-person-cooking-pizza-6176588/
				</div>
			</div>
		</footer>
	)
}
