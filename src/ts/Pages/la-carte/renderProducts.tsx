import React from "react"
import {BoissonType, DessertsType, PizzaType, SupplementType} from "../../Types/types"

type ProductType = PizzaType | BoissonType | DessertsType | SupplementType
export const RenderProductsLayout = ({product}: {product: ProductType}) => {
	if ("base" in product)
		return (
			<li
				className={"animate__animated animate__slideInUp my-8 w-full text-2xl"}
				key={`${product?._id}_${product?.nom}`}>
				<dl className={"flex flex-row flex-nowrap items-center gap-x-8"}>
					<dt className={"hidden"}>Nom du Produit</dt>
					<dd className={"block font-['Cinzel'] font-bold uppercase"}>{product?.nom}</dd>
					<dt className={"hidden"}>Prix du produit</dt>
					<div className={"mx-4 block w-max flex-1 border-t border-light-grey"} />
					<dd className={"block text-2xl"}> {product?.prix}€</dd>
				</dl>
				<dl>
					<dt className={"hidden"}>Liste des ingrédients</dt>
					<dd className={"w-full pr-3 font-describe leading-relaxed tracking-wider "}>
						{product?.base.describe && `${product?.base.describe}, `}
						{product?.ingredients && product?.ingredients.join(", ")}
					</dd>
					{product?.afterCook && (
						<dl>
							<dt className={"hidden"}>Ingrédients ajoutés après-cuisson</dt>
							<dd
								className={
									"pr-3 font-describe font-normal leading-relaxed tracking-wider"
								}>
								<strong className={"mr-2 font-bold"}>Après Cuisson :</strong>
								{product?.afterCook.join(", ")}
							</dd>
						</dl>
					)}
				</dl>
			</li>
		)

	return (
		<li
			className={"animate__animated animate__slideInUp my-8 w-full text-2xl"}
			key={`${product?._id}_${product?.nom}`}>
			<dl className={"flex flex-row flex-nowrap items-center gap-x-8"}>
				<dt className={"hidden"}>Nom du Produit</dt>
				<dd className={"block font-['Cinzel'] font-bold uppercase"}>{product?.nom}</dd>
				<dt className={"hidden"}>Prix du produit</dt>
				<div className={"mx-4 block w-max flex-1 border-t border-light-grey"} />
				<dd className={"block text-2xl"}> {product?.prix}€</dd>
			</dl>
		</li>
	)
}
