import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../../globalStyles';
export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color:#ce2127;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	 background: #ce2127;
	padding: 10px;
	box-shadow: 0 0 32px 8px #faf1f0;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #cc7d97;
	padding: 30px;
	background:#F5DEB3;

`;
export const FeatureName = styled.h3`
	font-weight: 800;
	font-size: 2rem;
	letter-spacing: 2px;
	color:#fff;
	@media screen and (max-width: 768px) {
		font-weight: 800;
		font-size: 2rem;
		letter-spacing: 1.3px;
		color:#fff;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1.2rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #fff;
	@media screen and (max-width: 768px) {
		color: #fff;
		font-size: 1.2rem;
	}
`;

export const FeatureButton = styled.div`
	
	padding: 20px;
	
`;