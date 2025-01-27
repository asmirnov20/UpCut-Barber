export const navLanguages = {
	SK: {
		about: 'O NÁS',
		services: 'SLUŽBY A CENY',
		team: 'NÁŠ TÝM',
		contact: 'KONTAKTY',
	},
	EN: {
		about: 'ABOUT US',
		services: 'SERVICES AND PRISES',
		team: 'OUR TEAM',
		contact: 'CONTACTS',
	},
	RU: {
		about: 'О НАС',
		services: 'УСЛУГИ И ЦЕНЫ',
		team: 'НАША КОМАНДА',
		contact: 'КОНТАКТЫ',
	},
	UA: {
		about: 'ПРО НАС',
		services: 'ПОСЛУГИ ТА ЦIНИ',
		team: 'НАША КОМАНДА',
		contact: 'КОНТАКТИ',
	},
}

export const heroText = {
	SK: (
		<>
			Profesionálne barber služby <br /> v Košiciach
		</>
	),
	EN: (
		<>
			Professional barber services <br /> in Košice
		</>
	),
	RU: (
		<>
			Профессиональные барберские услуги <br /> в Кошице
		</>
	),
	UA: (
		<>
			Професійні барберські послуги <br /> у Кошицях
		</>
	),
}

export const commonButtonText = {
	SK: 'Rezervovať',
	EN: 'Book Now',
	RU: 'Записаться',
	UA: 'Записатися',
}

export const followText = {
	SK: 'Sledujte nás',
	EN: 'Follow us',
	RU: 'Следите за нами',
	UA: 'Стежте за нами',
}

export const aboutText = {
	SK: {
		title: 'O NÁS',
		text1:
			'Vitáme vás v UpCut – mieste, kde sa majstrovstvo stretáva s pohodlím! Tento barbershop sme založili v srdci Košíc s 9-ročnými skúsenosťami, vášňou pre svoje remeslo a túžbou spraviť z každej vašej návštevy výnimočný zážitok.',
		text2:
			'V UpCut kombinujeme klasické techniky s modernými trendmi, takže budete vždy vyzerať skvelo. Naším cieľom nie je len perfektný výsledok, ale aj atmosféra, do ktorej sa budete radi vracať. Zastavte sa a presvedčte sa sami, že UpCut nie je len barbershop, je to miesto, kde sa začína váš nový štýl!',
	},
	EN: {
		title: 'ABOUT US',
		text1:
			'Welcome to UpCut – a place where mastery meets comfort! We established this barbershop in the heart of Košice with 9 years of experience, a passion for our craft, and a desire to make every visit an exceptional experience.',
		text2:
			'At UpCut, we combine classic techniques with modern trends, so you always look your best. Our goal is not only to achieve perfect results but also to create an atmosphere you’ll love to return to. Stop by and see for yourself that UpCut is not just a barbershop, it’s where your new style begins!',
	},
	RU: {
		title: 'О НАС',
		text1:
			'Приветствуем вас в UpCut – месте, где мастерство встречается с комфортом! Мы открыли этот барбершоп в сердце Кошице, имея 9 лет опыта, страсть к своему делу и стремление сделать каждое ваше посещение особенным.',
		text2:
			'В UpCut мы объединяем классические техники с современными трендами, чтобы вы всегда выглядели превосходно. Наша цель – не только идеальный результат, но и атмосфера, в которую хочется возвращаться. Загляните к нам и убедитесь сами: UpCut – это не просто барбершоп, это место, где начинается ваш новый стиль!',
	},
	UA: {
		title: 'ПРО НАС',
		text1:
			'Ласкаво просимо до UpCut – місця, де майстерність поєднується з комфортом! Ми заснували цей барбершоп у самому серці Кошиць, маючи 9-річний досвід, пристрасть до своєї справи та бажання зробити кожне ваше відвідування винятковим.',
		text2:
			'У UpCut ми поєднуємо класичні техніки з сучасними трендами, щоб ви завжди виглядали бездоганно. Наша мета – не лише ідеальний результат, а й атмосфера, куди хочеться повертатися. Завітайте до нас і переконайтесь самі: UpCut – це не просто барбершоп, це місце, де починається ваш новий стиль!',
	},
}

export const servicesText = {
	SK: 'Služby a ceny',
	EN: 'Services and prices',
	RU: 'Услуги и цены',
	UA: 'Послуги та цiни',
}

export const pricesText = {
	SK: {
		categories: [
			{
				name: 'Vlasy',
				items: [
					{ service: 'Classic strih (30 min)', price: '17 €' },
					{ service: 'Dlhé vlasy (60 min)', price: '23 €' },
					{ service: 'Precízny hodinový strih (60 min)', price: '24 €' },
				],
			},
			{
				name: 'Brada',
				items: [
					{ service: 'Farbenie brady + úprava (60 min)', price: '22 €' },
					{ service: 'Úprava brady (30 min)', price: '13 €' },
				],
			},
			{
				name: 'Komplet',
				items: [
					{
						service: 'Classic strih + úprava a farbenie brady (90 min)',
						price: '33 €',
					},
					{ service: 'Classic strih + úprava brady (60 min)', price: '27 €' },
				],
			},
		],
	},
	EN: {
		categories: [
			{
				name: 'Hair',
				items: [
					{ service: 'Classic haircut (30 min)', price: '17 €' },
					{ service: 'Long hair (60 min)', price: '23 €' },
					{ service: 'Precise one-hour haircut (60 min)', price: '24 €' },
				],
			},
			{
				name: 'Beard',
				items: [
					{ service: 'Beard coloring + trimming (60 min)', price: '22 €' },
					{ service: 'Beard trimming (30 min)', price: '13 €' },
				],
			},
			{
				name: 'Complete',
				items: [
					{
						service: 'Classic haircut + beard trimming and coloring (90 min)',
						price: '33 €',
					},
					{
						service: 'Classic haircut + beard trimming (60 min)',
						price: '27 €',
					},
				],
			},
		],
	},
	RU: {
		categories: [
			{
				name: 'Волосы',
				items: [
					{ service: 'Классическая стрижка (30 мин)', price: '17 €' },
					{ service: 'Длинные волосы (60 мин)', price: '23 €' },
					{ service: 'Тщательная часовая стрижка (60 мин)', price: '24 €' },
				],
			},
			{
				name: 'Борода',
				items: [
					{ service: 'Окрашивание бороды + уход (60 мин)', price: '22 €' },
					{ service: 'Уход за бородой (30 мин)', price: '13 €' },
				],
			},
			{
				name: 'Комплекс',
				items: [
					{
						service:
							'Классическая стрижка + уход и окрашивание бороды (90 мин)',
						price: '33 €',
					},
					{
						service: 'Классическая стрижка + уход за бородой (60 мин)',
						price: '27 €',
					},
				],
			},
		],
	},
	UA: {
		categories: [
			{
				name: 'Волосся',
				items: [
					{ service: 'Класична стрижка (30 хв)', price: '17 €' },
					{ service: 'Довге волосся (60 хв)', price: '23 €' },
					{ service: 'Ретельна годинна стрижка (60 хв)', price: '24 €' },
				],
			},
			{
				name: 'Борода',
				items: [
					{ service: 'Фарбування бороди + догляд (60 хв)', price: '22 €' },
					{ service: 'Догляд за бородою (30 хв)', price: '13 €' },
				],
			},
			{
				name: 'Комплект',
				items: [
					{
						service: 'Класична стрижка + догляд і фарбування бороди (90 хв)',
						price: '33 €',
					},
					{
						service: 'Класична стрижка + догляд за бородою (60 хв)',
						price: '27 €',
					},
				],
			},
		],
	},
}

export const teamHeading = {
	SK: 'Náš Tím',
	EN: 'Our Team',
	RU: 'Наша Команда',
	UA: 'Наша Команда',
}

export const barberInfo = {
	SK: {
		Jevhenij: { firstName: 'Yevhenii', position: 'Top Barber' },
		Mima: { firstName: 'Mima', position: 'Barber' },
	},
	EN: {
		Jevhenij: { firstName: 'Yevhenii', position: 'Top Barber' },
		Mima: { firstName: 'Mima', position: 'Barber' },
	},
	RU: {
		Jevhenij: { firstName: 'Евгений', position: 'Топ Барбер' },
		Mima: { firstName: 'Мима', position: 'Барбер' },
	},
	UA: {
		Jevhenij: { firstName: 'Євгеній', position: 'Топ Барбер' },
		Mima: { firstName: 'Міма', position: 'Барбер' },
	},
}

export const followUsText = {
	SK: (
		<>
			Sleduj nás
			<br />
			na Instagrame
		</>
	),
	EN: (
		<>
			Follow us
			<br />
			on Instagram
		</>
	),
	RU: (
		<>
			Подписывайся
			<br />
			на нас в Instagram
		</>
	),
	UA: (
		<>
			Підписуйся
			<br />
			на нас в Instagram
		</>
	),
}

export const contactsInfo = {
	SK: {
		title: 'Kontakty',
		items: {
			address: {
				title: 'Adresa',
				value: 'Staré Mesto 463 (Poštová ) 040 01 Košice',
			},
			phone: {
				title: 'Telefón',
				value: '+421 949 821 157',
			},
			email: {
				title: 'E-mail',
				value: 'upcut.plan.b@gmail.com',
			},
			workingHours: {
				title: 'Pracovné hodiny',
				value: 'Pn-So 09:00-17:00',
			},
		},
	},
	EN: {
		title: 'Contacts',
		items: {
			address: {
				title: 'Address',
				value: 'Staré Mesto 463 (Poštová ) 040 01 Košice',
			},
			phone: {
				title: 'Phone',
				value: '+421 949 821 157',
			},
			email: {
				title: 'E-mail',
				value: 'upcut.plan.b@gmail.com',
			},
			workingHours: {
				title: 'Working hours',
				value: 'Mon-Sun 09:00-17:00',
			},
		},
	},
	RU: {
		title: 'Контакты',
		items: {
			address: {
				title: 'Адрес',
				value: 'Staré Mesto 463 (Poštová ) 040 01 Кошице',
			},
			phone: {
				title: 'Телефон',
				value: '+421 949 821 157',
			},
			email: {
				title: 'E-mail',
				value: 'upcut.plan.b@gmail.com',
			},
			workingHours: {
				title: 'Время работы',
				value: 'Пн-Вс 09:00-17:00',
			},
		},
	},
	UA: {
		title: 'Контакти',
		items: {
			address: {
				title: 'Адреса',
				value: 'Staré Mesto 463 (Poštová ) 040 01 Кошице',
			},
			phone: {
				title: 'Телефон',
				value: '+421 949 821 157',
			},
			email: {
				title: 'E-mail',
				value: 'upcut.plan.b@gmail.com',
			},
			workingHours: {
				title: 'Години роботи',
				value: 'Пн-Нд 09:00-17:00',
			},
		},
	},
}

export const BookingBtnText = {
	SK: 'Online rezervácia',
	EN: 'Online reservation',
	RU: 'Онлайн запись',
	UA: 'Онлайн запис',
}

export default BookingBtnText

const currentYear = new Date().getFullYear()

export const rightsText = {
	SK: `@ VŠETKY PRÁVA VYHRADENÉ ${currentYear}`,
	EN: `@ ALL RIGHTS RESERVED ${currentYear}`,
	RU: `@ ВСЕ ПРАВА ЗАЩИЩЕНЫ ${currentYear}`,
	UA: `@ ВСІ ПРАВА ЗАХИЩЕНІ ${currentYear}`,
}
