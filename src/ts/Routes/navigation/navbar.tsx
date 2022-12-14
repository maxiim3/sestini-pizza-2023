import React from 'react'
// import '../../../node_modules/animate.css/animate.css'
import { IconMenuNavBar, IconFaceBook, IconInstagram } from '../../Components/icons'
import { NavLink } from 'react-router-dom'
import { PhoneNumber } from '../../Utils/informations'
import info from '../../Data/informations.json'
const TextLink = ({ children, link } : {children: React.ReactNode, link: string}) => {
	return (
		<NavLink
			className="group mx-auto text-center font-main text-xl tracking-wide text-beige lg:text-2xl"
			to={link}>
			<p
				className={
					'transition-color relative duration-300 ease-in-out hover:scale-105 group-hover:text-gold group-hover:drop-shadow-md'
				}>
				{children}
			</p>
			<div
				className={
					'relative top-1 hidden w-full border-t-2 border-beige drop-shadow-md transition duration-300 ease-in-out group-hover:block group-hover:border-gold-90'
				}
			/>
		</NavLink>
	)
}

export const Navbar = () => {
	return (
		<nav
			className={
				'hidden md:fixed md:z-20 md:block md:h-24 md:w-screen md:bg-dark-gray-90 md:shadow-2xl'
			}>
			<ul
				className={
					'max-w- animate__animated animate__fadeIn mx-auto flex h-full w-full max-w-7xl items-center justify-evenly lg:w-[85%]'
				}>
				<li>
					<NavLink to="/accueil">
						<IconMenuNavBar />
					</NavLink>
				</li>
				<li>
					<TextLink link={'/nous-trouver'}>Nous Trouver</TextLink>
				</li>
				<li>
					<TextLink link={'/la-carte'}>Notre Carte</TextLink>
				</li>

				<li>
					<div
						className={'mt-2 grid h-20 grid-cols-2 grid-rows-2  hover:drop-shadow-md'}
						aria-label={'Réseaux sociaux'}>
						<div className="col-span-1 row-start-1 justify-self-center">
							<a
								href={info[0].facebook}
								className={'inline-block'}>
								<IconFaceBook
									beige={true}
									classTW={'w-12'}
								/>
							</a>
						</div>
						<div className="col-span-1 row-start-1 justify-self-center">
							<a
								href={info[0].instagram}
								className={'inline-block'}>
								<IconInstagram
									beige={true}
									classTW={'w-12'}
								/>
							</a>
						</div>
						<div
							className="col-span-2 row-start-2 self-center justify-self-center font-main text-lg text-beige"
							aria-label={'Numéro de téléphone'}>
							<PhoneNumber />
						</div>
					</div>
				</li>
			</ul>
		</nav>
	)
}
