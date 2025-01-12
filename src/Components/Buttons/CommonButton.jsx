import { commonButtonText, followText } from '../../languages'
import './CommonButton.css'
import ButtonArrow from './ButtonArrow'

const CommonButton = ({
	currentLanguage,
	withArrow = true,
	buttonType = '',
	textSource = 'common', // New prop to select the text source
}) => {
	// Define button styles for different types
	const buttonClasses = {
		hero: 'btn--common',
		services: 'btn--services-prices',
		barber: 'btn--barber',
		follow: 'btn--follow',
	}

	// Choose the button class based on buttonType
	const selectedButtonClass = buttonClasses[buttonType] || buttonClasses.hero

	// Select text source based on the textSource prop
	const textSources = {
		common: commonButtonText,
		follow: followText,
	}
	const selectedTextSource = textSources[textSource] || commonButtonText

	// Define URLs for different button types
	const buttonLinks = {
		common: 'https://booking.atguest.com/sk/upcut',
		follow: 'https://www.instagram.com/upcut_barber',
	}
	const selectedLink = buttonLinks[textSource] || buttonLinks.common

	return (
		<a
			className={selectedButtonClass}
			href={selectedLink}
			type='button'
			target='_blank'
			rel='noopener noreferrer'
		>
			<p>{selectedTextSource[currentLanguage]}</p>
			{withArrow && <ButtonArrow />}
		</a>
	)
}

export default CommonButton
