import React from 'react'

import './ButtonArrow.css' // Make sure to create this CSS file

const ButtonArrow = () => {
	return (
		<svg
			className='hero-arrow'
			width='34'
			height='31'
			viewBox='0 0 35 34'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				className='arrow-background'
				x='0.335693'
				width='34'
				height='33.9998'
				rx='16.9999'
			/>
			<g clipPath='url(#clip0_1008_150)'>
				<path
					className='arrow'
					d='M24.2708 15.9194C24.6719 15.5183 24.6719 14.8688 24.2708 14.4676C23.8697 14.0665 23.2191 14.0665 22.8179 14.4676L17.4119 19.8736L12.006 14.4676C11.6049 14.0665 10.9543 14.0665 10.5531 14.4676C10.3525 14.6682 10.2523 14.9306 10.2523 15.1935C10.2523 15.4564 10.3526 15.7188 10.5531 15.9194L16.6855 22.052C17.0865 22.4531 17.7372 22.4531 18.1384 22.052L24.2708 15.9194Z'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1008_150'>
					<rect
						width='33.9998'
						height='34'
						fill='white'
						transform='matrix(0 -1 1 0 0.335693 34)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default ButtonArrow
