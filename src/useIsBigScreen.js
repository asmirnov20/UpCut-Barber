import { useState, useEffect } from 'react'

// Хук для определения экрана, с возможностью передавать значение явно
const useIsBigScreen = initialValue => {
	const [isBigScreen, setIsBigScreen] = useState(
		initialValue !== undefined ? initialValue : window.innerWidth > 1000
	)

	useEffect(() => {
		// Если initialValue не передан, отслеживаем изменение ширины экрана
		if (initialValue === undefined) {
			const handleResize = () => {
				setIsBigScreen(window.innerWidth > 1000)
			}

			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		} else {
			// Если передан initialValue, используем его, без отслеживания изменений
			setIsBigScreen(initialValue)
		}
	}, [initialValue])

	return isBigScreen
}

export default useIsBigScreen
