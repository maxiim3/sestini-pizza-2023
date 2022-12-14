export type PizzaType = {
	_id: number
	nom: string
	base: {
		label: string
		describe: string
		title: string
		key: string
		state: string
		setState: string
	}
	ingredients?: string[]
	avecViande: boolean
	avecPoisson: boolean
	afterCook?: null | string[]
	url?: string
	prix: string
}
export type BoissonType = {
	_id: number
	nom: string
	prix: string
	boissonChaudes: boolean
	boissonAlcool: boolean
	boissonSoft: boolean
}
export type DessertsType = {
	_id: number
	nom: string
	prix: string
	url: string
}
export type SupplementType = {
	_id: number
	nom: string
	prix: string
}
export type AllProductsType = {
	pizzaDeSaison?: PizzaType
	pizzas?: PizzaType[]
	boissons?: BoissonType[]
	desserts?: DessertsType[]
	supplements?: SupplementType[]
}
export type CategoriesType = "pizzaDeSaison" | "pizzas" | "boissons" | "desserts" | "supplements"