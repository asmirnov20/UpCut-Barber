import './LanguageSwitcher.css'

const LanguageSwitcher = ({
	currentLanguage,
	availableLanguages,
	changeLanguage,
	showLanguages,
	setShowLanguages,
	mode = 'dropdown', // 'dropdown' по умолчанию, можно передавать 'horizontal'
}) => {
	const allLanguages = ['SK', 'EN', 'RU', 'UA']

	return (
		<ul
			className={
				mode === 'horizontal' ? 'language-list__horizontal' : 'language-list'
			}
		>
			{mode === 'horizontal' ? (
				// Горизонтальный режим (отображаем все языки)
				<>
					{allLanguages.map(lang => (
						<li
							key={lang}
							className={`language-item--horizontal ${
								lang === currentLanguage
									? 'language-item--horizontal--active'
									: ''
							}`}
							onClick={() => changeLanguage(lang)}
						>
							{lang}
						</li>
					))}
				</>
			) : (
				// Режим dropdown (с отображением текущего языка)
				<div
					className='current-language'
					onMouseEnter={() => setShowLanguages(true)}
					onMouseLeave={() => setShowLanguages(false)}
				>
					{currentLanguage}
					{showLanguages && (
						<ul className='dropdown-menu'>
							{availableLanguages.map(lang => (
								<li
									key={lang}
									className='language-item'
									onMouseEnter={e => e.target.classList.add('highlight')}
									onMouseLeave={e => e.target.classList.remove('highlight')}
									onClick={() => changeLanguage(lang)}
								>
									{lang}
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</ul>
	)
}

export default LanguageSwitcher
