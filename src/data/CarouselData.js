export const data = [
	{
		title: 'Skin Training',
		description:
			"An exclusive course on skin that teaches you the basics of skin, skin science, skin function, skin disorders and its treatments, skin consultation, and advanced facials.",
		image: './assets/skin-care.png',
		courseName:'Foundation Course',
		courseDescription:'This is a 3-month course that provides holistic training and career guidance in areas like skin science, skin function, and skin structure. This course ensures that you build a strong foundation and gain skills with a deeper understanding of beauty techniques.',
	},
	{
		title: 'Hair Training',
		description: '"Every one aims for smooth, silky, and stunning hair. Learn how to make it happen with our expert guidance. "',
		image: './assets/hair-care2.png',
		courseName:'Foundation Course',
		courseDescription:'This 3-month course in hairdressing and hair care is designed to give you in-depth knowledge on different hairdressing techniques and latest hair trends.',
	},
	{
		title: 'Makeup Art',
		description: "With our foundation and advanced makeup courses, young talents like you get to set their skill sets further and become professional makeup artists.",
		image: './assets/skin.png',
		courseName:'Foundation Course',
		courseDescription:'A 1-month makeup course that takes you through the fundamentals of makeup skills and provides elementary training in area like facial anatomy, colour application, colour corrections etc.',
	},
	{
		title: 'Nail Art',
		description: "A 1-month makeup course that takes you through the fundamentals of makeup skills and provides elementary training in area like facial anatomy, colour application, colour corrections etc.",
		image: './assets/nail-art.png',
		courseName:'Foundation Course',
		courseDescription:'',
	},
	{
		title: 'Manicure and Pedicure',
		description: "With this 1-month course you will be equipped with latest trends of manicure and pedicure along with learning the fundamentals of hand and feet hygiene and nail care.",
		image: './assets/wax-care.png',
		courseName:'',
		courseDescription:'',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};