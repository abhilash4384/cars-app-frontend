import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	FlexCenterSection,
	GridCarsItem,
	GridCarsSection,
	GridImg,
	GridItemText,
	HeadeIcon,
	HeroSection,
	HeroVideo,
	Logo,
	Navbar,
} from './app.style';
import DARK_MODE from './assets/dark-mode.svg';
import HERO_VIDEO from './assets/lambo.mp4';
import LIGHT_MODE from './assets/light-mode.svg';
import LOGO from './assets/logo.webp';
import PROFILE from './assets/profile.svg';
import { LIGHT_THEME } from './theme/theme';

import intersectionObserver from './animation/intersection-observer-animation';
import AMAZE from './assets/cars/amaze.jpg';
import AURA from './assets/cars/aura.webp';
import BOLERO from './assets/cars/bolero.webp';
import BREZZA from './assets/cars/brezza.jpg';
import CIAZ from './assets/cars/ciaz.webp';
import CITY from './assets/cars/city.webp';
import CRETA from './assets/cars/creta.jpg';
import GRAND_VITARA from './assets/cars/grand-vitara.webp';
import NEXON from './assets/cars/nexon.webp';
import SCORPION from './assets/cars/scorpio-n.jpg';
import SLAVIA from './assets/cars/slavia.webp';
import SWIFT from './assets/cars/swift.jpg';
import VERNA from './assets/cars/verna.webp';
import VIRTUS from './assets/cars/virtus.jpg';
import BaseStyle from './index.style';

function App() {
	const [theme, setTheme] = useState('LIGHT');
	const heroRef = useRef('');
	useEffect(() => {
		if (heroRef.current) {
			intersectionObserver.observe(heroRef.current);
		}
	}, []);
	return (
		<ThemeProvider theme={LIGHT_THEME}>
			<main>
				<Navbar id="navbar">
					<div>
						<Logo src={LOGO} alt="logo" />
					</div>

					<div>
						<h2>Car App</h2>
					</div>

					<div>
						<HeadeIcon src={PROFILE} alt="Profile" />
						<HeadeIcon src={LIGHT_MODE} alt="Light Mode" />
						<HeadeIcon src={DARK_MODE} alt="Dark Mode" />
					</div>
				</Navbar>
				<HeroSection ref={heroRef}>
					<HeroVideo loop={true} autoPlay={true} muted>
						<source src={HERO_VIDEO} type="video/mp4" />
						Your browser does not support the video tag.
					</HeroVideo>
				</HeroSection>

				<FlexCenterSection>
					<h3>My Cars</h3>
				</FlexCenterSection>

				<GridCarsSection>
					<GridCarsItem>
						<GridImg src={VIRTUS} alt="VIRTUS" />
						<GridItemText>VIRTUS</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={VERNA} alt="VERNA" />
						<GridItemText>VERNA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={SWIFT} alt="SWIFT" />
						<GridItemText>SWIFT</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={SLAVIA} alt="SLAVIA" />
						<GridItemText>SLAVIA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={SCORPION} alt="SCORPION" />
						<GridItemText>SCORPION</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={NEXON} alt="NEXON" />
						<GridItemText>NEXON</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={GRAND_VITARA} alt="GRAND_VITARA" />
						<GridItemText>GRAND_VITARA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={CRETA} alt="CRETA" />
						<GridItemText>CRETA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={CITY} alt="CITY" />
						<GridItemText>CITY</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={CIAZ} alt="CIAZ" />
						<GridItemText>CIAZ</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={BREZZA} alt="BREZZA" />
						<GridItemText>BREZZA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={BOLERO} alt="BOLERO" />
						<GridItemText>BOLERO</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={AURA} alt="AURA" />
						<GridItemText>AURA</GridItemText>
					</GridCarsItem>

					<GridCarsItem>
						<GridImg src={AMAZE} alt="AMAZE" />
						<GridItemText>AMAZE</GridItemText>
					</GridCarsItem>
				</GridCarsSection>
			</main>
			<BaseStyle />
		</ThemeProvider>
	);
}

export default App;
