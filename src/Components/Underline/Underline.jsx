import React from 'react'
import './Underline.css' // Подключение стилей

const Underline = ({ type = 'light', width = 'full' }) => {
	const getClassNames = () => {
		let classNames = 'underline '

		// Вариант цвета/прозрачности
		classNames += type === 'dark' ? 'underline--dark ' : 'underline--light '

		// Вариант ширины
		classNames += width === 'full' ? 'underline--full ' : 'underline--inline '

		return classNames
	}

	return <div className={getClassNames()} />
}

export default Underline
