import './FollowUs.css'
import instagramPhone from '../../assets/iphone-mockup.png'
import CommonButton from '../Buttons/CommonButton'
import { followUsText } from '../../languages'
import followRotate from '../../assets/follow-rotate.svg'
import FollowUsSVG from './FollowUsSVG'

const FollowUs = ({ currentLanguage }) => {
	const title = followUsText[currentLanguage]

	return (
		<div className='follow-us-container'>
			<div className='follow-us_title'>
				<div className='follow-us_title-text'>{title}</div>
				<CommonButton
					withArrow={false}
					buttonType='services'
					currentLanguage={currentLanguage}
					textSource='follow'
				/>
			</div>
			<div className='folow-us_image-block'>
				<FollowUsSVG />
				<img
					src={instagramPhone}
					alt='instagram-phone-img'
					className='image-item-phone'
				/>
				<div className='image-block-decoration'></div>
			</div>
		</div>
	)
}

export default FollowUs
