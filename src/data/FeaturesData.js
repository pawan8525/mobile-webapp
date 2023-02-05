import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [

	{
		name: 'Bridal Package',
		description: 'Hydra Makeup, HD Makeup, Air Brush Makeup, Bridal package with hydra facial and air brush',
		icon:'./assets/png/package.png',
		imgClass: 'two',
	},
	{
		name: 'Bleach',
		description: 'Glow Diamond Bleach, Herbal Bleach, O3+ Meladerm Vitamin C Gel Bleach',
		icon: './assets/png/bleach_de_tan.png',
		imgClass: 'three',
	},
	{
		name: 'Facial',
		description: 'Hydro Facial(Most Popular), Skin lightening Facial,Anti Wrinkle Facial, Anti Pimple Facial, Glow Facial ',
		icon: './assets/png/facial_clean_up.png',
		imgClass: 'four',
	},
	{
		name: 'Hair Style',
		description: 'Hair Global Color, High Lighting Hair, Smoothing Hair, Keratin Hair, Botox Hair, Olaplex Hair',
		icon: './assets/png/hair_care.png',
		imgClass: 'one',
	},
	{
		name: 'Make Up',
		description: 'Party Mackup, Evergreen Makup, Ring ceremony makeup, Corporate Makeup,Transforming Look Makeup',
		icon: './assets/png/make_up.png',
		imgClass: 'five',
	},
	{
		name: 'Wax',
		description:
			'Soft wax, also known as strip waxing ',
		icon: './assets/png/wax.png',
		imgClass: 'six',
	},
];