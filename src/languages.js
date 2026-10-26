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
				name: 'Vlasy',
				items: [
					{ service: 'Classic strih (30 min)', price: '19 €' },
					{ service: 'Dlhé vlasy (60 min)', price: '25 €' },
					{ service: 'Classic strih + umytie hlavy (45 min)', price: '22 €' },
					{ service: 'Classic strih + depilácia voskom (45 min)', price: '23 €' },
					{ service: 'Kompletná úprava vlasov (umytie, vosk, styling) (60 min)', price: '27 €' },
				],
			},
			{
				name: 'Komplet',
				items: [
					{ service: 'Classic strih + úprava brady (60 min)', price: '29 €' },
					{ service: 'Classic strih + úprava brady + umytie hlavy (75 min)', price: '33 €' },
					{ service: 'Classic strih + úprava brady + vosk (75 min)', price: '33 €' },
					{ service: 'Dlhé vlasy + úprava brady (75 min)', price: '34 €' },
					{ service: 'Classic strih + úprava a farbenie brady (90 min)', price: '35 €' },
					{ service: 'Kompletný servis + farbenie brady (90 min)', price: '39 €' },
				],
			},
			{
				name: 'Brada',
				items: [
					{ service: 'Úprava brady (30 min)', price: '17 €' },
					{ service: 'Dlhá brada (10 cm+) (45 min)', price: '20 €' },
					{ service: 'Farbenie brady + úprava (60 min)', price: '25 €' },
				],
			},
			{
				name: 'Služby Junior Barber',
				items: [
					{ service: 'Strih Junior Barber (60 min)', price: '15 €' },
					{ service: 'Komplet Junior Barber (75 min)', price: '25 €' },
				],
			},
			{
				name: 'Farbenie Vlasov (Total Blond)',
				items: [
					{ service: 'Farbenie Vlasov (Total Blond) do 2 cm (150 min)', price: '60 €' },
					{ service: 'Farbenie Vlasov (Total Blond) Dlhé Vlasy 2 cm+ (180 min)', price: '70 €' },
				],
			},
			{
				name: 'Doplnkové služby',
				items: [
					{ service: 'Depilácia voskom (uši, nos, obočie) (15 min)', price: '5 €' },
					{ service: 'Umytie hlavy (15 min)', price: '5 €' },
				],
			},
		],
	},
	EN: {
		categories: [
			{
				name: 'Hair',
				items: [
					{ service: 'Classic haircut (30 min)', price: '19 €' },
					{ service: 'Long hair (60 min)', price: '25 €' },
					{ service: 'Classic haircut + hair wash (45 min)', price: '22 €' },
					{ service: 'Classic haircut + wax depilation (45 min)', price: '23 €' },
					{ service: 'Complete hair treatment (wash, wax, styling) (60 min)', price: '27 €' },
				],
			},
			{
				name: 'Complete',
				items: [
					{ service: 'Classic haircut + beard trim (60 min)', price: '29 €' },
					{ service: 'Classic haircut + beard trim + hair wash (75 min)', price: '33 €' },
					{ service: 'Classic haircut + beard trim + wax (75 min)', price: '33 €' },
					{ service: 'Long hair + beard trim (75 min)', price: '34 €' },
					{ service: 'Classic haircut + beard trim and coloring (90 min)', price: '35 €' },
					{ service: 'Complete service + beard coloring (90 min)', price: '39 €' },
				],
			},
			{
				name: 'Beard',
				items: [
					{ service: 'Beard trim (30 min)', price: '17 €' },
					{ service: 'Long beard (10 cm+) (45 min)', price: '20 €' },
					{ service: 'Beard coloring + trim (60 min)', price: '25 €' },
				],
			},
			{
				name: 'Junior Barber Services',
				items: [
					{ service: 'Junior Barber haircut (60 min)', price: '15 €' },
					{ service: 'Junior Barber complete (75 min)', price: '25 €' },
				],
			},
			{
				name: 'Hair Coloring (Total Blond)',
				items: [
					{ service: 'Hair Coloring (Total Blond) up to 2 cm (150 min)', price: '60 €' },
					{ service: 'Hair Coloring (Total Blond) Long Hair 2 cm+ (180 min)', price: '70 €' },
				],
			},
			{
				name: 'Additional services',
				items: [
					{ service: 'Wax depilation (ears, nose, eyebrows) (15 min)', price: '5 €' },
					{ service: 'Hair wash (15 min)', price: '5 €' },
				],
			},
		],
	},
	RU: {
		categories: [
			{
				name: 'Волосы',
				items: [
					{ service: 'Классическая стрижка (30 мин)', price: '19 €' },
					{ service: 'Длинные волосы (60 мин)', price: '25 €' },
					{ service: 'Классическая стрижка + мытьё головы (45 мин)', price: '22 €' },
					{ service: 'Классическая стрижка + депиляция воском (45 мин)', price: '23 €' },
					{ service: 'Полная укладка волос (мытьё, воск, стайлинг) (60 мин)', price: '27 €' },
				],
			},
			{
				name: 'Комплекс',
				items: [
					{ service: 'Классическая стрижка + уход за бородой (60 мин)', price: '29 €' },
					{ service: 'Классическая стрижка + уход за бородой + мытьё головы (75 мин)', price: '33 €' },
					{ service: 'Классическая стрижка + уход за бородой + воск (75 мин)', price: '33 €' },
					{ service: 'Длинные волосы + уход за бородой (75 мин)', price: '34 €' },
					{ service: 'Классическая стрижка + уход и окрашивание бороды (90 мин)', price: '35 €' },
					{ service: 'Полный сервис + окрашивание бороды (90 мин)', price: '39 €' },
				],
			},
			{
				name: 'Борода',
				items: [
					{ service: 'Уход за бородой (30 мин)', price: '17 €' },
					{ service: 'Длинная борода (10 см+) (45 мин)', price: '20 €' },
					{ service: 'Окрашивание бороды + уход (60 мин)', price: '25 €' },
				],
			},
			{
				name: 'Услуги Младшего Барбера',
				items: [
					{ service: 'Стрижка Младшего Барбера (60 мин)', price: '15 €' },
					{ service: 'Комплекс Младшего Барбера (75 мин)', price: '25 €' },
				],
			},
			{
				name: 'Окрашивание волос (Total Blond)',
				items: [
					{ service: 'Окрашивание волос (Total Blond) до 2 см (150 мин)', price: '60 €' },
					{ service: 'Окрашивание волос (Total Blond) длинные волосы 2 см+ (180 мин)', price: '70 €' },
				],
			},
			{
				name: 'Дополнительные услуги',
				items: [
					{ service: 'Восковая депиляция (уши, нос, брови) (15 мин)', price: '5 €' },
					{ service: 'Мытьё головы (15 мин)', price: '5 €' },
				],
			},
		],
	},
	UA: {
		categories: [
			{
				name: 'Волосся',
				items: [
					{ service: 'Класична стрижка (30 хв)', price: '19 €' },
					{ service: 'Довге волосся (60 хв)', price: '25 €' },
					{ service: 'Класична стрижка + миття голови (45 хв)', price: '22 €' },
					{ service: 'Класична стрижка + депіляція воском (45 хв)', price: '23 €' },
					{ service: 'Повне оформлення волосся (миття, віск, стайлінг) (60 хв)', price: '27 €' },
				],
			},
			{
				name: 'Комплект',
				items: [
					{ service: 'Класична стрижка + догляд за бородою (60 хв)', price: '29 €' },
					{ service: 'Класична стрижка + догляд за бородою + миття голови (75 хв)', price: '33 €' },
					{ service: 'Класична стрижка + догляд за бородою + віск (75 хв)', price: '33 €' },
					{ service: 'Довге волосся + догляд за бородою (75 хв)', price: '34 €' },
					{ service: 'Класична стрижка + догляд і фарбування бороди (90 хв)', price: '35 €' },
					{ service: 'Повний сервіс + фарбування бороди (90 хв)', price: '39 €' },
				],
			},
			{
				name: 'Борода',
				items: [
					{ service: 'Догляд за бородою (30 хв)', price: '17 €' },
					{ service: 'Довга борода (10 см+) (45 хв)', price: '20 €' },
					{ service: 'Фарбування бороди + догляд (60 хв)', price: '25 €' },
				],
			},
			{
				name: 'Послуги Молодшого Барбера',
				items: [
					{ service: 'Стрижка Молодшого Барбера (60 хв)', price: '15 €' },
					{ service: 'Комплект Молодшого Барбера (75 хв)', price: '25 €' },
				],
			},
			{
				name: 'Фарбування волосся (Total Blond)',
				items: [
					{ service: 'Фарбування волосся (Total Blond) до 2 см (150 хв)', price: '60 €' },
					{ service: 'Фарбування волосся (Total Blond) довге волосся 2 см+ (180 хв)', price: '70 €' },
				],
			},
			{
				name: 'Додаткові послуги',
				items: [
					{ service: 'Воскова депіляція (вуха, ніс, брови) (15 хв)', price: '5 €' },
					{ service: 'Миття голови (15 хв)', price: '5 €' },
				],
			},
		],
	},
};

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
		Sena: { firstName: 'Seňa', position: 'Barber' },
		David: { firstName: 'David', position: 'Junior barber' },
	},
	EN: {
		Jevhenij: { firstName: 'Yevhenii', position: 'Top Barber' },
		Mima: { firstName: 'Mima', position: 'Barber' },
		Sena: { firstName: 'Senya', position: 'Barber' },
		David: { firstName: 'David', position: 'Junior barber' },
	},
	RU: {
		Jevhenij: { firstName: 'Евгений', position: 'Топ Барбер' },
		Mima: { firstName: 'Мима', position: 'Барбер' },
		Sena: { firstName: 'Сеня', position: 'Барбер' },
		David: { firstName: 'Давид', position: 'Младший барбер' },
	},
	UA: {
		Jevhenij: { firstName: 'Євгеній', position: 'Топ Барбер' },
		Mima: { firstName: 'Міма', position: 'Барбер' },
		Sena: { firstName: 'Сеня', position: 'Барбер' },
		David: { firstName: 'Давид', position: 'Молодший барбер' },
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
