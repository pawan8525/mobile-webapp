import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper ,Button} from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
	NamedWrapper,
	FeatureButton
} from './CarouselStyles';
import {useTranslation} from 'react-i18next';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState<any>(null);
	const {t}=useTranslation();

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
                {t('find_more_about_us')}
    			</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#ce2127' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index} data-testid="ImageWrapper">
						<CarouselImage src={el.image} />
						<NamedWrapper size="1.5rem" margin="0.4rem 0 0" weight="bold" color="#ffffff">
							{el.title}
							
						</NamedWrapper>
						<TextWrapper size="1.2rem" margin="1.7rem" color="#ffffff">
							{el.description}
							
							
						</TextWrapper>
						
						{/* <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							
						</TextWrapper> */}
						<NamedWrapper size="1.5rem" margin="0.4rem 0 0" weight="bold" color="#ffffff">
						{el.courseName}
							
						</NamedWrapper>
						<TextWrapper  size="1.2rem" margin="1.7rem" color="#ffffff">
							{el.courseDescription}
							
							
						</TextWrapper>
					
						{/* <CardButton>{t('learn_more')}</CardButton> */}
						<a style={{alignSelf:'center'}} href="https://api.whatsapp.com/send?phone=919416166226&text=Hi Sunita Mam" target="_blank">


						<FeatureButton>
													<Button >{t('book_now')}</Button></FeatureButton>
							</a>
						
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;