import './Contacts.css'
import { contactsInfo } from '../../languages.js'
import Socials from '../Navbar/Socials'

const Contacts = ({ currentLanguage, isBigScreen }) => {
	const { title, items } = contactsInfo[currentLanguage]
	const { address, phone, email, workingHours } = items

	return (
		<div id='contacts' div className='contacts-warp'>
			<p className='contacts-title'>{title}</p>
			<ul className='contacts-list'>
				<li className='contacts-item'>
					<div className='contacts-item_title'>{address.title}</div>
					<div className='contacts-item_content'>{address.value}</div>
				</li>
				<li className='contacts-item'>
					<div className='contacts-item_title'>{phone.title}</div>
					<div className='contacts-item_content'>{phone.value}</div>
				</li>
				<li className='contacts-item'>
					<div className='contacts-item_title'>{email.title}</div>
					<div className='contacts-item_content'>{email.value}</div>
				</li>
				<li className='contacts-item'>
					<div className='contacts-item_title'>{workingHours.title}</div>
					<div className='contacts-item_content'>{workingHours.value}</div>
				</li>
			</ul>
			{!isBigScreen ? (
				<Socials isBigScreen={false} forceDesktopStyles={true} />
			) : (
				''
			)}
		</div>
	)
}

export default Contacts
