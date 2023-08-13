import api from '@/api/index'
import MockAdapter from 'axios-mock-adapter'

//db imitation
const characters = [
	{
		id: 1, 
		imageRef: '/src/assets/images/characters/hinata.png',
		name: 'Шоё Хината',
		quote: 'Почему я не сдаюсь? Потому что я ещё не проиграл.',
		infos: [
			{ title: 'Кандзи', value: '日向 翔陽' },
			{ title: 'Команда', value: [{ id: 1, title: 'Старшая Карасуно' }] },
			{ title: 'Позиция', value: 'Центр. нападающий' },
			{ title: 'Номер', value: ['1 (средняя школа 3-й год)', '10 (старшая школа 1-й год)'] },
			{ title: 'Пол', value: 'Мужской' },
			{ title: 'Прозвища', value: ['Ниндзя Шоё', 'Коротышка', 'Рыжик', 'Чиби-чан', 'Окончательная приманка (Рюноске), Коротышка пирог (Ойкава)'] },
			{ title: 'Возраст', value: 16 },
			{ title: 'День рождения', value: '21 июня' },
			{ title: 'Высота', value: ['162,8 см – апрель 2012', '164,2 см – ноябрь 2012'] },
			{ title: 'Вес', value: ['51,9 кг - апрель 2012'] },
			{ title: 'Занятость', value: 'Ученик старшей школы (1 год, 3 курс) - 2012' },
		],
		gallery: [
			'/src/assets/images/characters/hinata/1.png',
			'/src/assets/images/characters/hinata/2.png',
			'/src/assets/images/characters/hinata/3.png',
			'/src/assets/images/characters/hinata/4.png',
			'/src/assets/images/characters/hinata/5.png',
			'/src/assets/images/characters/hinata/6.png',
			'/src/assets/images/characters/hinata/7.png',
			'/src/assets/images/characters/hinata/8.png',
			'/src/assets/images/characters/hinata/9.png',
			'/src/assets/images/characters/hinata/10.png',
			'/src/assets/images/characters/hinata/11.png',
			'/src/assets/images/characters/hinata/12.png',
		]
	},
	{
		id: 2, 
		imageRef: '/src/assets/images/characters/nishiya.png',
		name: 'Юу Нишиноя',
		quote: 'Я бы прикрыл ваши спины ценой жизни, если бы мне пришлось',
		infos: [
			{ title: 'Кандзи', value: '西谷 夕' },
			{ title: 'Команда', value: [{ id: 101, title: 'Средняя школа Чидорияма (ранее)' }, { id: 1, title: 'Старшая Карасуно' }] },
			{ title: 'Позиция', value: 'Либеро' },
			{ title: 'Номер', value: ['4 (Старшая Карасуно - старшая школа (2 год, 3 курс))'] },
			{ title: 'Пол', value: 'Мужской' },
			{ title: 'Прозвища', value: ['Божественный хранитель Карасуно', 'Ноя-сан', 'Юу-чан (Саеко)', 'Супер-либеро (Кейшин Укай)'] },
			{ title: 'Возраст', value: 17 },
			{ title: 'День рождения', value: '10 октября' },
			{ title: 'Высота', value: [ '159.3 см - апрель 2012', '160.5 см - ноябрь 2012' ] },
			{ title: 'Вес', value: ['51.9 кг'] },
			{ title: 'Занятость', value: 'Ученик старшей школы (2 год, 3 курс) - 2012' },
		],
		gallery: [
			'/src/assets/images/characters/nishiya/1.png',
			'/src/assets/images/characters/nishiya/2.png',
			'/src/assets/images/characters/nishiya/3.png',
			'/src/assets/images/characters/nishiya/4.png',
			'/src/assets/images/characters/nishiya/5.png',
			'/src/assets/images/characters/nishiya/6.png',
			'/src/assets/images/characters/nishiya/7.png',
			'/src/assets/images/characters/nishiya/8.png',
			'/src/assets/images/characters/nishiya/9.png',
			'/src/assets/images/characters/nishiya/10.png',
			'/src/assets/images/characters/nishiya/11.png',
			'/src/assets/images/characters/nishiya/12.png',
		]
	},
	{
		id: 3, 
		imageRef: '/src/assets/images/characters/tobio.png',
		name: 'Тобио Кагеяма',
		quote: 'Пока я здесь, ты непобедим!',
		infos: [
			{ title: 'Кандзи', value: '影山 飛雄' },
			{ title: 'Команда', value: [{ id: 102, title: 'Начальная Школа Акияма (ранее)' }, { id: 103, title: 'Китагава Даичи (Бывшая)' }, { id: 1, title: 'Cтаршая Карасуно' }] },
			{ title: 'Позиция', value: 'Связующий' },
			{ title: 'Номер', value: ['10 (Старшая Карасуно - старшая школа (1 год, 3 курс))' ] },
			{ title: 'Пол', value: 'Мужской' },
			{ title: 'Прозвища', value: ['Король площадки (Китагава Даичи)', 'Устаяма-кун (Хината)'] },
			{ title: 'Возраст', value: 16 },
			{ title: 'День рождения', value: '22 декабря' },
			{ title: 'Высота', value: [ '180.6 см – апрель 2012', '181,9 см – ноябрь 2012' ] },
			{ title: 'Вес', value: ['66.3 кг'] },
			{ title: 'Занятость', value: 'Ученик старшей школы (1 год, 3 курс) - 2012' },
		],
		gallery: [
			'/src/assets/images/characters/tobio/1.png',
			'/src/assets/images/characters/tobio/2.png',
			'/src/assets/images/characters/tobio/3.png',
			'/src/assets/images/characters/tobio/4.png',
			'/src/assets/images/characters/tobio/5.png',
			'/src/assets/images/characters/tobio/6.png',
			'/src/assets/images/characters/tobio/7.png',
			'/src/assets/images/characters/tobio/8.png',
			'/src/assets/images/characters/tobio/9.png',
			'/src/assets/images/characters/tobio/10.png',
			'/src/assets/images/characters/tobio/11.png',
			'/src/assets/images/characters/tobio/12.png',
		]
	},
	{ 
		id: 4,
		imageRef: '/src/assets/images/characters/tanaka.png', 
		name: 'Рюноске Танака', 
		quote: 'Все по эту сторону сетки — твои товарищи!',
		infos: [
			{ title: 'Кандзи', value: '影山 飛雄' },
			{ title: 'Команда', value: [{ id: 102, title: 'Начальная Школа Акияма (ранее)' }, { id: 103, title: 'Китагава Даичи (ранее)' }, { id: 1, title: 'Cтаршая Карасуно' }] },
			{ title: 'Позиция', value: 'Доигровщик' },
			{ title: 'Номер', value: ['5 (Старшая Карасуно)'] },
			{ title: 'Пол', value: 'Мужской' },
			{ title: 'Прозвища', value: ['Энерджайзер', 'Живчик', 'Лысый из Карасуно'] },
			{ title: 'Возраст', value: 17 },
			{ title: 'День рождения', value: '3 марта' },
			{ title: 'Высота', value: [ '178,2 см' ] },
			{ title: 'Вес', value: ['68.8 кг'] },
			{ title: 'Занятость', value: 'Ученик старшей школы (2 год, 1 курс) - 2012' },
		],
		gallery: [
			'/src/assets/images/characters/tanaka/1.png',
			'/src/assets/images/characters/tanaka/2.png',
			'/src/assets/images/characters/tanaka/3.png',
			'/src/assets/images/characters/tanaka/4.png',
			'/src/assets/images/characters/tanaka/5.png',
			'/src/assets/images/characters/tanaka/6.png',
			'/src/assets/images/characters/tanaka/7.png',
			'/src/assets/images/characters/tanaka/8.png',
			'/src/assets/images/characters/tanaka/9.png',
			'/src/assets/images/characters/tanaka/10.png',
			'/src/assets/images/characters/tanaka/11.png',
			'/src/assets/images/characters/tanaka/12.png',
		]
	}
]

const mock = new MockAdapter(api, { delayResponse: 500 })

export async function getCharacter(character_id) {
	mock.onGet('/characters', { params: { id: character_id } }).reply(200, characters.find(character => Number(character.id) == character_id ))

	return api.get('/characters', { params: {id: character_id }})
}
    