import './NavLinks.css'

const NavLinks = ({
	currentLanguage,
	languages,
	isBigScreen,
	handleMenuToggle,
	className = 'nav-links--nomargin',
}) => {
	const handleScroll = sectionId => {
		const section = document.getElementById(sectionId)
		if (section) {
			const yOffset = -85 // Смещение для фиксированного Navbar
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset
			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}

	const navItems = [
		{ id: 'about-us', label: languages[currentLanguage].about },
		{ id: 'price-list', label: languages[currentLanguage].services },
		{ id: 'team', label: languages[currentLanguage].team },
		{ id: 'contacts', label: languages[currentLanguage].contact },
	]

	return (
		<ul
			className={`nav-links ${className} ${
				!isBigScreen ? 'nav-links--vertical' : ''
			}`}
			onClick={!isBigScreen ? handleMenuToggle : undefined}
		>
			{navItems.map(({ id, label }) => (
				<li
					key={id}
					className={`nav-item ${!isBigScreen ? 'nav-item--vertical' : ''}`}
					onClick={() => handleScroll(id)}
				>
					{label}
				</li>
			))}
		</ul>
	)
}

export default NavLinks
