import styled from 'styled-components';

export const Navbar = styled.nav`
	position: fixed;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.cardBg};
	z-index: 2;
	padding: 15px 40px;
	opacity: 0.7;
	transition: all 1s ease-in-out;
`;

export const Logo = styled.img`
	height: 72px;
	width: 70px;
	&:hover {
		cursor: pointer;
	}
`;

export const HeadeIcon = styled.img`
	height: 50px;
	&:hover {
		cursor: pointer;
	}
`;

export const HeroSection = styled.section`
	padding-top: 0px;
`;

export const HeroVideo = styled.video`
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
`;

export const FlexCenterSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: ${({ margin }) => margin ?? '10px'};
`;

export const GridCarsSection = styled.section`
	display: grid;
	margin: 20px 30px;
	grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
	align-items: center;
	grid-gap: 20px;
	justify-items: center;
	align-items: center;

	@media (max-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		grid-gap: 10px;
		margin: 0px;
	}
`;

export const GridCarsItem = styled.div`
	background-color: ${({ theme }) => theme.btnBg};
	color: ${({ theme }) => theme.btnTextColor};
	&:hover {
		background-color: ${({ theme }) => theme.btnHoverBgColor};
		color: ${({ theme }) => theme.btnTextHoverColor};
		cursor: pointer;
		box-shadow: 5px 5px 10px #808080;
	}
`;

export const GridImg = styled.img`
	width: 100%;
`;

export const GridItemText = styled.p`
	text-align: center;
	padding: 5px;
`;
