import NavLinks from '../Navbar/NavLinks/NavLinks'
import Socials from '../Navbar/Socials'
import './MapAndFooter.css'
import Map from './MapComponent/Map'
import { navLanguages as languages } from '../../languages'

import logo from '../../assets/Logo-UpCut.png'
import { rightsText } from '../../languages'
import Underline from './../Underline/Underline.jsx'

const MapAndFooter = ({ currentLanguage, isBigScreen }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className='map-and-footer_container'>
			<Map />
			{/* <div className='map-and-footer_socials'>
				<Socials isBigScreen={isBigScreen} />
			</div>
			<div className='map-and-footer_navLinks-container'>
				<NavLinks
					languages={languages}
					currentLanguage={currentLanguage}
					className='nav-links--nomargin'
				/>
			</div> */}
			<Underline />
			<div className='map-and-footer--logo-container'>
				<img src={logo} alt='logo-img' className='map-and-footer--logo' />
			</div>
			<div className='map-and-footer-rights'>
				<p className='map-and-footer-rights-text'>
					{rightsText[currentLanguage]}
				</p>
			</div>
		</div>
	)
}

export default MapAndFooter
