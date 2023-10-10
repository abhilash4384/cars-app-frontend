import styled from 'styled-components';

export const Navbar = styled.nav`
	position: fixed;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 40px;
	background: ${({ theme }) => theme.cardBg};
	z-index: 2;
	opacity: 0.8;
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
