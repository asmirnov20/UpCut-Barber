export const navLanguages = {
	SK: {
		about: 'O NÁS',
		services: 'SLUŽBY A CENY',
		team: 'NÁŠ TÍM',
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
			Професійні барберські послуги <br /> в Кошицях
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
			'Náš tím vás víta v barbershope UpCut s priateľským a profesionálnym prístupom, na mieste kde berieme svoje povolanie ako vášeň.',
		text2:
			'Sme presvedčení, že skvelý účes nie je možný bez skvelého servisu. Náš tím kombinuje klasické techniky s najnovšími trendmi, aby váš strih alebo fúzy boli nielen dokonalé, ale aj nadčasové. Môžte sa spoľahnúť na poradenstvo pri výbere účesu, tipy pre starostlivosť a úpravu, a ďalšie služby, vďaka ktorým pozdvihneme váš výzor na novú úroveň.',
	},
	EN: {
		title: 'ABOUT US',
		text1:
			'Our team welcomes you to the UpCut barbershop with a friendly and professional approach, in a place where we take our profession as a passion.',
		text2:
			'We believe that a great haircut is not possible without great service. Our team combines classic techniques with the latest trends to ensure your haircut or beard is not only perfect but also timeless. You can rely on advice for choosing a hairstyle, grooming tips, and other services that will elevate your look to a new level.',
	},
	RU: {
		title: 'О НАС',
		text1:
			'Наша команда приветствует вас в барбершопе UpCut с дружелюбным и профессиональным подходом, в месте, где мы воспринимаем свою профессию как призвание.',
		text2:
			'Мы уверены, что отличная стрижка невозможна без отличного сервиса. Наша команда сочетает классические техники с последними трендами, чтобы ваша стрижка или борода были не только идеальными, но и вне времени. Вы можете рассчитывать на консультации по выбору прически, советы по уходу и другие услуги, которые выведут ваш образ на новый уровень.',
	},
	UA: {
		title: 'ПРО НАС',
		text1:
			'Наша команда вітає вас у барбершопі UpCut із дружнім та професійним підходом, у місці, де ми сприймаємо свою професію як покликання.',
		text2:
			'Ми переконані, що чудова стрижка неможлива без чудового сервісу. Наша команда поєднує класичні техніки з останніми трендами, щоб ваша стрижка або борода були не лише ідеальними, а й позачасовими. Ви можете розраховувати на консультації щодо вибору зачіски, поради з догляду та інші послуги, які піднімуть ваш образ на новий рівень.',
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
				name: 'Brada',
				items: [
					{ service: 'Dlhá brada (10 cm+) - 45 min', price: '20 €' },
					{ service: 'Farbenie brady + úprava (60 min)', price: '25 €' },
					{ service: 'Úprava brady (30 min)', price: '15 €' },
				],
			},
			{
				name: 'Doplnkové služby',
				items: [
					{
						service: 'Depilácia voskom (uši, nos, obočie) - 15 min',
						price: '5 €',
					},
				],
			},
			{
				name: 'Komplet',
				items: [
					{
						service: 'Classic strih + úprava a farbenie brady (90 min)',
						price: '35 €',
					},
					{ service: 'Classic strih + úprava brady (60 min)', price: '29 €' },
				],
			},
			{
				name: 'Vlasy',
				items: [
					{ service: 'Classic strih (30 min)', price: '18 €' },
					{ service: 'Classic strih + Umytie hlavy (45 min)', price: '22 €' },
					{ service: 'Dlhé vlasy (60 min)', price: '24 €' },
				],
			},
		],
	},
	EN: {
		categories: [
			{
				name: 'Beard',
				items: [
					{ service: 'Long beard (10 cm+) - 45 min', price: '20 €' },
					{ service: 'Beard coloring + trimming (60 min)', price: '25 €' },
					{ service: 'Beard trimming (30 min)', price: '15 €' },
				],
			},
			{
				name: 'Additional services',
				items: [
					{
						service: 'Wax depilation (ears, nose, eyebrows) - 15 min',
						price: '5 €',
					},
				],
			},
			{
				name: 'Complete',
				items: [
					{
						service: 'Classic haircut + beard trimming and coloring (90 min)',
						price: '35 €',
					},
					{
						service: 'Classic haircut + beard trimming (60 min)',
						price: '29 €',
					},
				],
			},
			{
				name: 'Hair',
				items: [
					{ service: 'Classic haircut (30 min)', price: '18 €' },
					{ service: 'Classic haircut + Hair wash (45 min)', price: '22 €' },
					{ service: 'Long hair (60 min)', price: '24 €' },
				],
			},
		],
	},
	RU: {
		categories: [
			{
				name: 'Борода',
				items: [
					{ service: 'Длинная борода  (10 см+) - 45 мин', price: '20 €' },
					{ service: 'Окрашивание бороды + уход (60 мин)', price: '25 €' },
					{ service: 'Уход за бородой (30 мин)', price: '15 €' },
				],
			},
			{
				name: 'Дополнительные услуги',
				items: [
					{
						service: 'Восковая депиляция (уши, нос, брови) - 15 мин',
						price: '5 €',
					},
				],
			},
			{
				name: 'Комплекс',
				items: [
					{
						service:
							'Классическая стрижка + уход и окрашивание бороды (90 мин)',
						price: '35 €',
					},
					{
						service: 'Классическая стрижка + уход за бородой (60 мин)',
						price: '29 €',
					},
				],
			},
			{
				name: 'Волосы',
				items: [
					{ service: 'Классическая стрижка (30 мин)', price: '18 €' },
					{
						service: 'Классическая стрижка + Мытье головы (45 мин)',
						price: '22 €',
					},
					{ service: 'Длинные волосы (60 мин)', price: '24 €' },
				],
			},
		],
	},
	UA: {
		categories: [
			{
				name: 'Борода',
				items: [
					{ service: 'Довга борода  (10 см+) - 45 хв', price: '20 €' },
					{ service: 'Фарбування бороди + догляд (60 хв)', price: '25 €' },
					{ service: 'Догляд за бородою (30 хв)', price: '15 €' },
				],
			},
			{
				name: 'Додаткові послуги',
				items: [
					{
						service: 'Воскова депіляція (вуха, ніс, брови) - 15 хв',
						price: '5 €',
					},
				],
			},
			{
				name: 'Комплект',
				items: [
					{
						service: 'Класична стрижка + догляд і фарбування бороди (90 хв)',
						price: '35 €',
					},
					{
						service: 'Класична стрижка + догляд за бородою (60 хв)',
						price: '29 €',
					},
				],
			},
			{
				name: 'Волосся',
				items: [
					{ service: 'Класична стрижка (30 хв)', price: '18 €' },
					{
						service: 'Класична стрижка + Миття голови (45 мин)',
						price: '22 €',
					},
					{ service: 'Довге волосся (60 хв)', price: '24 €' },
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
		Dominika: { firstName: 'Dominika', position: 'Barber' },
	},
	EN: {
		Jevhenij: { firstName: 'Yevhenii', position: 'Top Barber' },
		Mima: { firstName: 'Mima', position: 'Barber' },
		Dominika: { firstName: 'Dominika', position: 'Barber' },
	},
	RU: {
		Jevhenij: { firstName: 'Евгений', position: 'Топ Барбер' },
		Mima: { firstName: 'Мима', position: 'Барбер' },
		Dominika: { firstName: 'Доминика', position: 'Барбер' },
	},
	UA: {
		Jevhenij: { firstName: 'Євгеній', position: 'Топ Барбер' },
		Mima: { firstName: 'Міма', position: 'Барбер' },
		Dominika: { firstName: 'Домiнiка', position: 'Барбер' },
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
				value: 'Pn-Pi 09:00-19:00, So-Ne: na objednávky',
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
				value: 'Mo-Fr 09:00-19:00, Sa-Su: by appointment',
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
				value: 'Пн-Пт 09:00-19:00, Сб-Вс: по записи',
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
				value: 'Пн-Пт 09:00-19:00, Сб-Нд: за записом',
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
