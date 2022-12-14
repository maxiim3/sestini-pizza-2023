/**
 * @type {[{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: string, num: string, cp: string, lat: string}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},null,null]}
 */
const jours : JoursType[] = [
	{
		_id: 0,
		jour: "lundi",
		estOuvert: false,
		horaires: "",
		url: "",
		adresse: {
			ville: "",
			num: "",
			rue: "",
			cp: " ",
			lieuDit: "",
			googleMaps: "",
			lat: 0,
			lng: 0,
		},
	},
	{
		_id: 1,
		jour: "mardi",
		estOuvert: false,
		horaires: "",
		url: "",
		adresse: {
			ville: "",
			num: "",
			rue: "",
			cp: " ",
			lieuDit: "",
			googleMaps: "",
			lat: 0,
			lng: 0,
		},
	},
	{
		_id: 2,
		estOuvert: true,
		jour: "mercredi",
		horaires: "18h - 21h",
		url: "./img/emplacement-mercredi.png",
		adresse: {
			ville: "Pignan",
			num: "1",
			rue: "Ancienne Route de Cournonterral",
			cp: "34570",
			lieuDit: "Parking Coopérative Oléicole",
			googleMaps:
				"https://www.google.com/maps/place/1+Anc.+Rte+de+Cournonterral,+34570+Pignan/@43.5783592,3.7530944,17z/data=!3m1!4b1!4m5!3m4!1s0x12b6ad584ca257e9:0xe7cccc3b514b5cee!8m2!3d43.5783592!4d3.7552831",
			lat: 43.57884,
			lng: 3.75509,
		},
	},
	{
		_id: 3,
		estOuvert: true,
		jour: "jeudi",
		horaires: "18h - 21h",
		url: "./img/emplacement-jeudi.png",
		adresse: {
			ville: "Vic La Gardiole",
			num: "2",
			rue: "Chemin de la Source",
			cp: "34110 ",
			lieuDit: "Parking La Couleur Des Saisons",
			googleMaps:
				"https://www.google.com/maps/place/2+Chem.+de+la+Source,+34110+Vic-la-Gardiole/@43.4986089,3.7856534,17z/data=!3m1!4b1!4m5!3m4!1s0x12b6b38086b639df:0xe5b330f64601505e!8m2!3d43.4986089!4d3.7878421",
			lat: 43.4986,
			lng: 3.78784,
		},
	},
	{
		_id: 4,
		estOuvert: true,
		jour: "vendredi",
		horaires: "18h - 22h",
		url: "./img/emplacement-mercredi.png",
		adresse: {
			ville: "Pignan",
			num: "1",
			rue: "Ancienne Route de Cournonterral",
			cp: "34570",
			lieuDit: "Parking Coopérative Oléicole",
			googleMaps:
				"https://www.google.com/maps/place/1+Anc.+Rte+de+Cournonterral,+34570+Pignan/@43.5783592,3.7530944,17z/data=!3m1!4b1!4m5!3m4!1s0x12b6ad584ca257e9:0xe7cccc3b514b5cee!8m2!3d43.5783592!4d3.7552831",
			lat: 43.57884,
			lng: 3.75509,
		},
	},
	{
		_id: 5,
		jour: "samedi",
		estOuvert: true,
		horaires: "18h - 22h",
		url: "./img/emplacement-dimanche.png",
		adresse: {
			ville: "Villeneuve Les Maguelone",
			num: "93 ",
			rue: "Rue des Troenes",
			cp: "34750",
			lieuDit: "Parking Intermarché Super",
			googleMaps:
				"https://www.google.com/maps/place/93+Rue+des+Troenes,+34750+Villeneuve-l%C3%A8s-Maguelone/@43.5374641,3.85515,17z/data=!4m13!1m7!3m6!1s0x12b6b1a8e555cc7b:0xdbc2367806cf2325!2s93+Rue+des+Troenes,+34750+Villeneuve-l%C3%A8s-Maguelone!3b1!8m2!3d43.5374641!4d3.8573387!3m4!1s0x12b6b1a8e555cc7b:0xdbc2367806cf2325!8m2!3d43.5374641!4d3.8573387",
			lat: 43.53764,
			lng: 3.85798,
		},
	},
	{
		_id: 6,
		jour: "dimanche",
		estOuvert: true,
		horaires: "18h - 22h",
		url: "./img/emplacement-dimanche.png",
		adresse: {
			ville: "Villeneuve Les Maguelone",
			num: "93 ",
			rue: "Rue des Troenes",
			cp: "34750",
			lieuDit: "Parking Intermarché Super",
			googleMaps:
				"https://www.google.com/maps/place/93+Rue+des+Troenes,+34750+Villeneuve-l%C3%A8s-Maguelone/@43.5374641,3.85515,17z/data=!4m13!1m7!3m6!1s0x12b6b1a8e555cc7b:0xdbc2367806cf2325!2s93+Rue+des+Troenes,+34750+Villeneuve-l%C3%A8s-Maguelone!3b1!8m2!3d43.5374641!4d3.8573387!3m4!1s0x12b6b1a8e555cc7b:0xdbc2367806cf2325!8m2!3d43.5374641!4d3.8573387",
			lat: 43.53764,
			lng: 3.85798,
		},
	},
]

export const getDays = () : JoursType[] => {
	return jours
}
export type JoursType = {
	_id: number
	jour: string
	estOuvert: boolean
	horaires: string
	url: string
	adresse: {
		ville: string
		num: string
		rue: string
		cp: string
		lieuDit: string
		googleMaps: string
		lat: number
		lng: number
	}
}
