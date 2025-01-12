import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Homeview from './Components/HomeView/Homeview'
import useIsBigScreen from './useIsBigScreen'
import AboutUs from './Components/AboutUs/AboutUs'
import PriceList from './Components/PriceList/PriceList'
import Team from './Components/Team/Team'
import FollowUs from './Components/FollowUs/FollowUs'
import Contacts from './Components/Contacts/Contacts'
import MapAndFooter from './Components/MapAndFooter/MapAndFooter'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
import BookOnline from './Components/BookOnline/BookOnline'
import UpArrow from './Components/Buttons/UpArrow'

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [progress, setProgress] = useState(0) // Для прогресс-бара
	const isBigScreen = useIsBigScreen() // Используем хук с порогом 1000px
	const [currentLanguage, setCurrentLanguage] = useState('SK')

	// Функция имитации загрузки
	useEffect(() => {
		const incrementProgress = () => {
			setProgress(prev => {
				if (prev < 100) {
					return prev + 2 // Увеличиваем прогресс быстрее
				}
				setIsLoading(false) // Завершаем загрузку
				return 100
			})
		}

		// Используем requestAnimationFrame для анимации
		const interval = setInterval(incrementProgress, 20)

		return () => clearInterval(interval)
	}, [])

	
	return (
		<>
			<>
				<div style={{ display: isLoading ? 'block' : 'none' }}>
					<LoadingScreen progress={progress} />
				</div>
				<div className={`body-wrapper ${isLoading ? '' : 'loaded'}`}>
					<Navbar
						isBigScreen={isBigScreen}
						currentLanguage={currentLanguage}
						setCurrentLanguage={setCurrentLanguage}
					/>
					<div>
						<Homeview
							isBigScreen={isBigScreen}
							currentLanguage={currentLanguage}
						/>
						<AboutUs currentLanguage={currentLanguage} />
						<PriceList currentLanguage={currentLanguage} />
						<Team currentLanguage={currentLanguage} />
						<FollowUs currentLanguage={currentLanguage} />
						<Contacts
							currentLanguage={currentLanguage}
							isBigScreen={isBigScreen}
						/>
						<MapAndFooter
							currentLanguage={currentLanguage}
							isBigScreen={isBigScreen}
						/>
					</div>
					<BookOnline currentLanguage={currentLanguage} />
					<UpArrow />
				</div>
			</>
		</>
	)
}

export default App
