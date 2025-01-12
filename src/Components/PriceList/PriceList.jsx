import './PriceList.css'
import { servicesText, pricesText } from '../../languages'
import CommonButton from '../Buttons/CommonButton.jsx'
import Underline from '../Underline/Underline.jsx'

const PriceList = ({ currentLanguage }) => {
	const title = servicesText[currentLanguage]
	const { categories } = pricesText[currentLanguage]

	return (
		<div id='price-list' className='price-list_warp'>
			<h2 className='price-list_title'>{title}</h2>

			<table className='price-list_table'>
				

				<tbody>
					{categories.map((category, catIndex) => (
						<>
							{/* Название категории */}
							<tr key={`category-${catIndex}`} className='table_category-row'>
								<th colSpan='3' className='table_category-name'>
									{category.name}
								</th>
							</tr>
							{/* Элементы категории */}
							{category.items.map((item, index) => (
								<tr key={`item-${catIndex}-${index}`} className='table_row'>
									<th className='table_thead'>{item.service}</th>
									<td></td>
									<td className='table_price'>{item.price}</td>
								</tr>
							))}
						</>
					))}
				</tbody>
			</table>

			<CommonButton
				withArrow={false}
				buttonType='services'
				currentLanguage={currentLanguage}
			/>
			<Underline type='light' width='full' />
		</div>
	)
}

export default PriceList
