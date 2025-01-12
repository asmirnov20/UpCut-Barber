import './HeroPreview.css'
import logo from '../../assets/Logo-UpCut.png'
import logo_mobile from '../../assets/hero-preview-logo--mobile.png'
import { heroText } from '../../languages'
import CommonButton from '../Buttons/CommonButton'

const HeroPreview = ({ currentLanguage, isBigScreen }) => {
	return (
		<div className='hero-preview'>
			{isBigScreen ? (
				<>
					<img
						src={logo}
						className='hero-preview--desktop-logo'
						alt='logo-desktop'
						loading='lazy'
					/>
					<p className='hero-text'>{heroText[currentLanguage]}</p>
				</>
			) : (
				<>
					<img
						src={logo_mobile}
						className='hero-preview--mobile-logo'
						alt='logo-mobile'
						loading='lazy'
					/>
					<p className='hero-text--mobile'>{heroText[currentLanguage]}</p>
				</>
			)}
			<CommonButton
				withArrow={true}
				buttonType={'hero'}
				currentLanguage={currentLanguage}
			/>
		</div>
	)
}

export default HeroPreview
