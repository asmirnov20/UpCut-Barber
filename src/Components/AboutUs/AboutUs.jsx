import './AboutUs.css'
import { aboutText } from '../../languages'
import Underline from '../Underline/Underline'

const AboutUs = ({ currentLanguage }) => {
	const title = aboutText[currentLanguage].title
	return (
		<div id='about-us' className='about-us_wrapper'>
			<h2 className='about-us_title'>{title}</h2>
			<div className='about-us_body'>
				<p>{aboutText[currentLanguage].text1}</p>
				<p>{aboutText[currentLanguage].text2}</p>
			</div>
			<Underline type='light' width='full' />
		</div>
	)
}

export default AboutUs
