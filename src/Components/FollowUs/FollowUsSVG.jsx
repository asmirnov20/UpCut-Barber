import React from 'react'

const FollowUsSVG = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 500 500'
			width='500'
			height='500'
			className='image-item-text'
		>
			<defs>
				<path
					id='textPath'
					d='M250,250m-200,0a200,200 0 1,1 400,0a200,200 0 1,1 -400,0'
				/>
			</defs>
			<text fontFamily='Arial, sans-serif' fontSize='150' fill='white'>
				<textPath href='#textPath' textAnchor='middle' startOffset='0%'>
					FOLLOW US ON INSTAGRAM. UPCUT BARBER. FOLLOW US ON INSTAGRAM. UPCUT
					BARBER.FOLLOW US ON INSTAGRAM. UPCUT BARBER. FOLLOW US ON INSTAGRAM.
					UPCUT BARBER.
				</textPath>
			</text>
		</svg>
	)
}

export default FollowUsSVG
