import upArrow from '../../assets/up-arrow.svg'
import './UpArrow.css'

const UpArrow = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<>
			<img
				src={upArrow}
				alt='up-arrow'
				className='map-and-footer--logo_arrow'
				onClick={scrollToTop}
			/>
		</>
	)
}

export default UpArrow
