import PizzaDeSaisonJson from "../Data/pizzaDeSaison.json"
import MenuSummerJson from "../Data/menuSummer.json"
import MenuWinterJson from "../Data/menuWinter.json"
import {
	AllProductsType,
	BoissonType,
	CategoriesType,
	DessertsType,
	PizzaType,
	SupplementType,
} from "../Types/types"
import {useCallback, useMemo, useReducer, useState} from "react"

export const useProducts = () => {
	let carte: "Printemps-Été" | "Automne-Hiver"
	const menuDeSaison = (saison: "summer" | "winter") => {
		if (saison === "summer") {
			carte = "Printemps-Été"
			return {
				pizzaDeSaison: PizzaDeSaisonJson,
				pizzas: [...MenuSummerJson["pizzas"]],
				boissons: [...MenuSummerJson["boissons"]],
				desserts: [...MenuSummerJson["desserts"]],
				supplements: [...MenuSummerJson["supplements"]],
			}
		}
		if (saison === "winter") {
			carte = "Automne-Hiver"
			return {
				pizzaDeSaison: PizzaDeSaisonJson,
				pizzas: [...MenuWinterJson["pizzas"]],
				boissons: [...MenuWinterJson["boissons"]],
				desserts: [...MenuWinterJson["desserts"]],
				supplements: [...MenuWinterJson["supplements"]],
			}
		}
	}

	const allProducts: AllProductsType = useMemo(() => menuDeSaison("winter") as AllProductsType, [])
	const allPizzas = useMemo<PizzaType[]>(() => allProducts?.pizzas!, [allProducts])
	const pizzaDeSaison = useMemo<PizzaType>(() => allProducts?.pizzaDeSaison!, [allProducts])
	const allDrinks = useMemo<BoissonType[]>(() => allProducts?.boissons!, [allProducts])
	const allDesserts = useMemo<DessertsType[]>(() => allProducts?.desserts!, [allProducts])
	const allSupplements = useMemo<SupplementType[]>(() => allProducts?.supplements!, [allProducts])
	const [activeCategory, setActiveCategory] = useState<CategoriesType>("pizzas")!

	const [filteredProducts, dispatchProducts] = useReducer(reducer, allPizzas)

	function reducer(
		category: CategoriesType,
	): DessertsType[] | SupplementType[] | PizzaType[] | BoissonType[] {
		switch (category) {
			case "pizzas":
				return [...allPizzas]
			case "boissons":
				return [...allDrinks]
			case "desserts":
				return [...allDesserts]
			default:
				return [...allSupplements]
		}
	}

	/**
	 * When click on Button Category,
	 * (1) Set the Active Category
	 * @param cat: {string} for categorySection
	 */
	const handleCategorize = (cat: CategoriesType) =>
		useCallback(() => {
			setActiveCategory(cat) //(1)
			dispatchProducts(cat)
		}, [cat])

	return {
		carte,
		filteredProducts,
		activeCategory,
		allProducts,
		allPizzas,
		pizzaDeSaison,
		allDrinks,
		allDesserts,
		allSupplements,
		handleCategorize,
	}
}
