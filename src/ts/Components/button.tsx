import React, {MouseEventHandler} from "react"
import PropTypes from "prop-types"
import "../../../node_modules/animate.css/animate.css"

/**
 * #Button Wrapper
 * @param children
 * @param activeClass {boolean}
 * @param onSetActiveDay {function}
 * @param key {string || number}
 * @param nav {boolean} nav ? Nav button : common Button, calls and applies the selected style
 * @param height {number} by default : 32 -> modify the height of the button
 * @return {JSX.Element}
 * @constructor
 */
export const Button = ({
	children,
	activeClass,
	onClick,
	key,
	nav = false,
	height = 28,
}: ButtonTypeProps) => {
	const colors = {
		isActive: "bg-beige text-dark-grey",
		isNotActive: "border-beige text-beige bg-transparent border-solid border-2",
	}
	const commonStyles = {
		layoutProps: "flex flex-column justify-center items-center ",
		boxProps: `h-${height} md:h-[100px] w-28 sm:w-32 md:w-44 px-2 sm:px-4 md:px-6 m-0 p-0 `,
		borderProps: "rounded-3xl box-border",
		textProps: "text-base sm:text-lg md:text-2xl font-semibold text-center ",
	}
	const navStyles = {
		layoutProps: "flex flex-row justify-evenly items-center gap-y-2",
		boxProps: "h-28 w-64 px-2 m-0 p-0 ",
		borderProps: "rounded-full box-border",
		textProps: "text-lg font-semibold text-center ",
	}

	const getClasses = () => {
		return nav ? navStyles : commonStyles
	}

	return (
		<button
			key={key}
			className={`cursor-pointer ${getClasses().layoutProps} ${getClasses().boxProps} ${
				getClasses().borderProps
			} ${getClasses().textProps} ${activeClass ? colors.isActive : colors.isNotActive}`}
			onClick={onClick}>
			{children}
		</button>
	)
}

/**
 * Strict Type Checking Props
 * @type {{onCLick: Requireable<(...args: any[]) => any>, activeClass: Requireable<string>, children: *, key: Requireable<string>}}
 */
Button.propTypes = {
	activeClass: PropTypes.bool,
	onSetActiveDay: PropTypes.func,
	key: PropTypes.string || PropTypes.number,
	nav: PropTypes.bool,
	height: PropTypes.number,
	onMouseEvent: PropTypes.func,
}
type ButtonTypeProps = {
	children?: React.ReactNode
	activeClass?: boolean
	onClick?:MouseEventHandler<Element>
	key?: string | number
	nav?: boolean
	height?: number
}
