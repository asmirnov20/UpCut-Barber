import './Team.css'
import { teamHeading } from '../../languages'
import CommonButton from '../Buttons/CommonButton'
import barberJevhenij from '../../assets/Barber__Yevhenii.jpg'
import barberMima from '../../assets/Barber__Mima.jpg'
import { barberInfo } from '../../languages'

const Team = ({ currentLanguage }) => {
	const title = teamHeading[currentLanguage]

	const infoYevhenii = barberInfo[currentLanguage].Jevhenij

	const infoMima = barberInfo[currentLanguage].Mima
	return (
		<div id='team' className='team-warp'>
			<p className='team-title'>{title}</p>
			<div className='barber-container'>
				<div className='barber-card'>
					<div className='barber-card_img'>
						<img src={barberJevhenij} alt='barber-Yevhenii' />
					</div>
					<div className='barber-card_info'>
						<div className='barber-card_name'>
							<div className='barber-card_firstname'>
								{infoYevhenii.firstName}
							</div>
							<div className='barber-card-postion'>{infoYevhenii.position}</div>
						</div>
						<div>
							<CommonButton
								withArrow={false}
								buttonType='barber'
								currentLanguage={currentLanguage}
							/>
						</div>
					</div>
				</div>
				<div className='barber-card'>
					<div className='barber-card_img'>
						<img src={barberMima} alt='barber-Mima' />
					</div>
					<div className='barber-card_info'>
						<div className='barber-card_name'>
							<div className='barber-card_firstname'>{infoMima.firstName}</div>
							<div className='barber-card-postion'>{infoMima.position}</div>
						</div>
						<div>
							<CommonButton
								withArrow={false}
								buttonType='barber'
								currentLanguage={currentLanguage}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
