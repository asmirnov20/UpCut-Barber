import fb from '../../assets/fb-socials.svg'
import fb_mobile from '../../assets/fb-socials-mobile.svg'
import whatsapp from '../../assets/whatsapp-socials.svg'
import whatsapp_mobile from '../../assets/whatsapp-mobile.svg'
import instagram from '../../assets/instagram-socials.svg'
import instagram_mobile from '../../assets/instagram-mobile.svg'
import './Socials.css'

const Socials = ({ isBigScreen, forceDesktopStyles }) => {
	const isDesktopStyles = forceDesktopStyles || isBigScreen

	return (
		<div className={isDesktopStyles ? 'social-item' : 'social-item--mobile'}>
			<a
				href='https://www.facebook.com/profile.php?id=100010885875066'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={isDesktopStyles ? fb : fb_mobile}
					className={
						isDesktopStyles ? 'social-img--desktop' : 'social-img--mobile'
					}
					alt='facebook-link'
				/>
			</a>
			<a
				href='https://api.whatsapp.com/send?phone=+421949821157'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={isDesktopStyles ? whatsapp : whatsapp_mobile}
					className={
						isDesktopStyles ? 'social-img--desktop' : 'social-img--mobile'
					}
					alt='whatsapp-link'
				/>
			</a>
			<a
				href='https://www.instagram.com/upcut_barber'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={isDesktopStyles ? instagram : instagram_mobile}
					className={
						isDesktopStyles ? 'social-img--desktop' : 'social-img--mobile'
					}
					alt='instagram-link'
				/>
			</a>
		</div>
	)
}

export default Socials
