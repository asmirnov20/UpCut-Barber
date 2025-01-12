import './BookOnline.css'
import BookingBtnText from '../../languages'
import { useState } from 'react'
import BookingMenu from './BookingMenu/BookingMenu'

const BookOnline = ({ currentLanguage }) => {
	const text = BookingBtnText[currentLanguage]
	const [isOpen, setIsOpen] = useState(false)

	const togglePopup = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			{/* Кнопка бронирования, скрывается при открытии меню */}
			{!isOpen && (
				<a className='book-online-button' href='#' onClick={togglePopup}>
					<div className='booking-button_background'></div>
					<div className='booking-button_wave'></div>
					<div className='booking-button_text'>{text}</div>
				</a>
			)}

			{/* Всплывающее меню */}
			<BookingMenu isOpen={isOpen} togglePopup={togglePopup} />
		</>
	)
}

export default BookOnline
