import './BurgerMenu.css'
import logo_mobile from '../../assets/logo2.png'
import closeIcon from '../../assets/close-icon.svg'
import text_logo_white from '../../assets/text-logo-white.svg'
import './Navbar.css'
import Socials from './Socials'
import LanguageSwitcher from './LanguageSwitcher'
import NavLinks from './NavLinks/NavLinks'

const BurgerMenu = ({
	currentLanguage,
	languages,
	availableLanguages,
	changeLanguage,
	isMenuOpen,
	setIsMenuOpen,
	handleMenuToggle,
}) => {
	return (
		<div className='burger-menu-warp'>
			<div className='menu-component__content'>
				<div className='menu-component__header'>
					<div className='nav-logo'>
						<img
							className='burger-image--mobile'
							src={logo_mobile}
							alt='logo-mobile'
						/>
					</div>
					<div
						className='menu-component__close'
						onClick={() => setIsMenuOpen(!isMenuOpen)} /* Переключаем меню */
					>
						<img src={closeIcon} alt='close-icon' />
					</div>
				</div>
				<div className='menu-component__body'>
					<NavLinks
						languages={languages}
						currentLanguage={currentLanguage}
						isBigScreen={false}
						handleMenuToggle={handleMenuToggle}
					/>
				</div>
				<div className='menu-component__footer'>
					<div className='menu-footer__number'>+421 949 821 157</div>
					<div className='menu-social'>
						<Socials isBigScreen={false} />
					</div>
					<div className='menu-language-switcher'>
						<LanguageSwitcher
							mode='horizontal'
							availableLanguages={availableLanguages}
							currentLanguage={currentLanguage}
							changeLanguage={changeLanguage}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
