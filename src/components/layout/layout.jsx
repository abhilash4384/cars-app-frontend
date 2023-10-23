import React from 'react';
import { HeadeIcon, Logo, Navbar } from '../../app.style';
import LOGO from '../../assets/logo.webp';
import PROFILE from '../../assets/profile.svg';
import Home from '../../pages/home';

const Layout = () => {
	return (
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
				</div>
			</Navbar>
			<Home />
		</main>
	);
};

export default Layout;
