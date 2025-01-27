import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map', // ID контейнера
			style: 'mapbox://styles/mitchellsbestie22/cm42rebls00ya01sd97b48w2y', // Правильный стиль
			center: [21.255676, 48.723105],
			zoom: 14,
		})
		// Добавляем маркер
		new mapboxgl.Marker({ color: 'red' })
			.setLngLat([21.255676, 48.723105])
			.addTo(map)

		return () => map.remove() // Очистка карты при удалении компонента
	}, [])

	return (
		<div className='map-container'>
			<div id='map' className='map-content'></div>
		</div>
	)
}

export default Map
