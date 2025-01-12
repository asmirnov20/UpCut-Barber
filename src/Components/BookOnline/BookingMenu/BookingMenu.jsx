import './BookingMenu.css'
import closeBtn from '../../../assets/booking-menu-close.png'
import { useState, useEffect } from 'react'

const BookingMenu = ({ isOpen, togglePopup }) => {
	const [showCloseButton, setShowCloseButton] = useState(false)

	useEffect(() => {
		if (isOpen) {
			// Показать кнопку после завершения анимации открытия
			const timer = setTimeout(() => {
				setShowCloseButton(true)
			}, 200) // Время совпадает с `transition` в CSS
			return () => clearTimeout(timer)
		} else {
			// Скрыть кнопку сразу при закрытии
			setShowCloseButton(false)
		}
	}, [isOpen])

	// Обработчик события popstate для закрытия меню при нажатии кнопки "назад"
	useEffect(() => {
		const handlePopState = event => {
			if (event.state && event.state.iframeOpen) {
				togglePopup() // Закрываем меню
			}
		}

		window.addEventListener('popstate', handlePopState)

		return () => {
			window.removeEventListener('popstate', handlePopState)
		}
	}, [togglePopup])

	return (
		<div
			className={`booking-menu-wrapper ${isOpen ? 'open' : ''}`}
			onClick={togglePopup} // Закрытие меню при клике на затемнённую область
		>
			{/* Кнопка закрытия */}
			{showCloseButton && (
				<button
					className='booking-menu-close-button'
					onClick={togglePopup} // Закрытие меню при клике на кнопку
				>
					<img src={closeBtn} alt='Close' className='close-icon' />
				</button>
			)}

			{/* Контейнер меню */}
			<div
				className='booking-menu-content'
				onClick={e => e.stopPropagation()} // Предотвращаем закрытие при клике внутри меню
			>
				<iframe
					className='booking-menu-iframe'
					src='https://booking.atguest.com/sk/upcut'
					title='AtGuest Reservation'
				></iframe>
			</div>
		</div>
	)
}
export default BookingMenu
