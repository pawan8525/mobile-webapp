import React,  {FC, useEffect } from 'react';
import { Container, Section,Button } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,FeatureButton
} from './FeaturesStyles';
import {

	ImgWrapper,
	Img
} from '../Content/ContentStyles';
import { featuresData } from '../../data/FeaturesData';
import { useAnimation } from 'framer-motion';
import {useTranslation} from 'react-i18next';

const Features = () => {
	const {t}=useTranslation();
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};
	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el:any, index:any) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
							<Img
								src={el.icon}
								alt={el.name}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}
							/>
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
						
							<FeatureText>{el.description}</FeatureText>
							<FeatureButton>
							<a href="https://api.whatsapp.com/send?phone=919416166226&text=Hello Sunita mam" target="_blank">
							<Button >{t('book_now')}</Button>
							</a>
							</FeatureButton>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;