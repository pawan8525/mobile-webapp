import i18next from 'i18next';
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Founded in 1979',
	},
	headline:"profile_heading2",
	description: 'profile_description2',
	buttonLabel: 'book_now',
	imgStart: 'start',
	img: './assets/png/sunita_profile.jpg',
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Training & Placement',
	},
	headline: 'training_headline',
	description: 'training_description',
	buttonLabel: "book_now",

	linkTo: '/more',
	imgStart: 'start',
	img: './assets/picture/course.jpg',
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
	"why_us_reason",
	buttonLabel: "book_now",

	linkTo: '/download',
	imgStart: '',
	img: './assets/picture/why_us.jpg',
	start: 'true',
};