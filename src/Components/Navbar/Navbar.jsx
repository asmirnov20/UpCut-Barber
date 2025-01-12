import './Navbar.css'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import logo from '../../assets/Logo-UpCut.png'
import logo_mobile from '../../assets/Logo-UpCut.png'
import { navLanguages as languages } from '../../languages'
import { useState } from 'react'
import Socials from './Socials'
import menuIcon from '../../assets/burger-menu-icon.svg'
import BurgerMenu from './BurgerMenu'
import NavLinks from './NavLinks/NavLinks'

const Navbar = ({ isBigScreen, currentLanguage, setCurrentLanguage }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false) // состояние для открытия бургер-меню
	// Состояние для выбранного основного языка

	// Состояние для отображения списка языков при наведении
	const [showLanguages, setShowLanguages] = useState(false)

	// Определяем языки, которые не равны текущему
	const availableLanguages = Object.keys(languages).filter(
		lang => lang !== currentLanguage
	)

	// Функция для изменения языка
	function changeLanguage(lang) {
		setCurrentLanguage(lang)
		setShowLanguages(false) // Закрыть выпадающий список после выбора
	}

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<nav className='nav-warp'>
				{isBigScreen ? (
					<>
						<div className='nav-logo'>
							<img
								className='nav-image--desktop'
								src={logo}
								alt='logo-desktop'
								onClick={scrollToTop}
							/>
						</div>
						<NavLinks
							languages={languages}
							currentLanguage={currentLanguage}
							isBigScreen={isBigScreen}
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
						/>
						<div className='socials-group'>
							<LanguageSwitcher
								currentLanguage={currentLanguage}
								availableLanguages={availableLanguages}
								changeLanguage={changeLanguage}
								showLanguages={showLanguages}
								setShowLanguages={setShowLanguages}
							/>
							<Socials isBigScreen={isBigScreen} />
						</div>
					</>
				) : (
					<>
						<div className='nav-logo'>
							<img
								className='nav-image--mobile'
								src={logo_mobile}
								alt='logo-mobile'
							/>
						</div>
						<img
							src={menuIcon}
							className='burger-menu-icon'
							alt='burger-menu-icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)} /* Переключаем меню */
						/>
					</>
				)}
			</nav>

			{/* Если меню открыто, рендерим <div> с классом 'BurgerMenuContent' */}
			{isMenuOpen && (
				<BurgerMenu
					currentLanguage={currentLanguage}
					languages={languages}
					availableLanguages={availableLanguages}
					changeLanguage={changeLanguage}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
					handleMenuToggle={handleMenuToggle}
				/>
			)}
		</>
	)
}

export default Navbar
