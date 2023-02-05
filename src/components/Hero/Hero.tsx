import React,{useEffect,useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import {useTranslation} from 'react-i18next';

const Hero = () => {
	const v1="./assets/v1.mp4";
	const v2="./assets/v2.mp4";
	const v3="./assets/v3.mp4";
	const v4="./assets/v4.mp4";
	const v5="./assets/v5.mp4";
	const v6="./assets/v6.mp4";
	const {t}=useTranslation();
	const [vidIndex, setVidIndex] = useState(0);
	const ref = useRef<HTMLVideoElement>(null);
	// useEffect(() => {
	//   if (vidIndex === 0 && ref.current) {
	// 	ref?.current.play();
	//   }
	// }, [ref, vidIndex]);
	const videos = [v1, v2,v3,v4,v5,v6];
	return (
		<HeroSection>
			{console.log("videos[vidIndex]",videos[vidIndex])}
			{console.log("vidIndex",vidIndex)}
			<HeroVideo   src={v1} autoPlay muted  />
		
      <HeroVideo
    
        src={videos[vidIndex]}
        muted
        autoPlay
		ref={ref}
		onEnded={() => setVidIndex((idx) => idx==videos.length ? 0 :idx + 1)}
      />
			<Container>
				<MainHeading>{t('profile_description')}</MainHeading>
				<HeroText>
				{t('profile_heading')}
				</HeroText>
				<ButtonWrapper>
					
				<a href="https://api.whatsapp.com/send?phone=919416166226&text=urlencodedtext" target="_blank">
						<Button>{t('book_now')}</Button>
					</a>
					<a href="https://api.whatsapp.com/send?phone=919416166226&text=urlencodedtext" target="_blank">
					<HeroButton>{t('learn_more')}</HeroButton>
					</a>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
