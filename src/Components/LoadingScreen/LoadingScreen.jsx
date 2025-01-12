import './LoadingScreen.css'
import loadingLogo from '../../assets/Logo-UpCut.png'

const LoadingScreen = ({ progress }) => {
	return (
		<div className='loading-screen'>
			<img src={loadingLogo} className='loading-logo'></img>
			<div className='progress-bar'>
				<div
					className='progress'
					style={{ width: `${progress + 10}%`, transition: 'width 0.1s ease' }}
				></div>
			</div>
			<div className='progress-text'>{progress}%</div>
		</div>
	)
}

export default LoadingScreen
