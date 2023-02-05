import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
	FooterContainer
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
	
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							{/* <SocialIcon src="./assets/logo.png" /> */}
							Red Rose Parlour 
						</FooterLogo>
						<FooterAddress>
						VIP Tower, Delhi Road opposite Maharani Kishori Girls College, Rohtak
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social:any, index:any) => (
								<FooterSocialIcon
									key={index}
									href="
									https://www.instagram.com/red_rose_beauty_academy/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem:any, index:any) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link:any, linkIndex:any) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>Red Rose Parlour © 1979 - {new Date().getFullYear()}  </FooterRights>
			</FooterWrapper>
			
		</Section>
	);
}

export default Footer;