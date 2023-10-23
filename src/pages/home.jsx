import { useEffect, useRef } from 'react';
import intersectionObserver from '../animation/intersection-observer-animation';
import {
	FlexCenterSection,
	GridCarsItem,
	GridCarsSection,
	GridImg,
	GridItemText,
	HeroSection,
	HeroVideo,
} from '../app.style';
import HERO_VIDEO from '../assets/lambo.mp4';

import AMAZE from '../assets/cars/amaze.jpg';
import AURA from '../assets/cars/aura.webp';
import BOLERO from '../assets/cars/bolero.webp';
import BREZZA from '../assets/cars/brezza.jpg';
import CIAZ from '../assets/cars/ciaz.webp';
import CITY from '../assets/cars/city.webp';
import CRETA from '../assets/cars/creta.jpg';
import GRAND_VITARA from '../assets/cars/grand-vitara.webp';
import NEXON from '../assets/cars/nexon.webp';
import SCORPION from '../assets/cars/scorpio-n.jpg';
import SLAVIA from '../assets/cars/slavia.webp';
import SWIFT from '../assets/cars/swift.jpg';
import VERNA from '../assets/cars/verna.webp';
import VIRTUS from '../assets/cars/virtus.jpg';

const Home = () => {
	const heroRef = useRef('');
	useEffect(() => {
		if (heroRef.current) {
			intersectionObserver.observe(heroRef.current);
		}
	}, []);
	return (
		<>
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
		</>
	);
};

export default Home;
