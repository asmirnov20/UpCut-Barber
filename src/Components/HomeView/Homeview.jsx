import HeroPreview from './HeroPreview'
import HeroImage from '../../assets/Hero-image.png'
import HeroImgHovered from '../../assets/Hero__img-hovered.png'
import ImageMobile from '../../assets/Hero-image--mobile.png'
import './Homeview.css'

const Homeview = ({ currentLanguage, isBigScreen }) => {
	return (
		<div className='homeview-wrapper'>
			<div className='hero-image--mobile'>
				<img src={ImageMobile} alt='hero-image' />
			</div>
			<HeroPreview
				isBigScreen={isBigScreen}
				currentLanguage={currentLanguage}
			/>
			<div className='hero-image-wrapper'>
				<img className='hero-image' src={HeroImage} alt='hero-image' />
				<img
					className='hero-image__hovered'
					src={HeroImgHovered}
					alt='hovered hero-image'
				/>
			</div>
		</div>
	)
}

export default Homeview
