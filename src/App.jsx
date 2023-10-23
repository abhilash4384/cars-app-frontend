import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HeadeIcon, StickyButton } from './app.style';
import DARK_MODE from './assets/dark-mode.svg';
import LIGHT_MODE from './assets/light-mode.svg';
import Layout from './components/layout/layout';
import BaseStyle from './index.style';
import { DARK_THEME, LIGHT_THEME } from './theme/theme';

function App() {
	const [isLightTheme, setIsLightTheme] = useState(true);

	return (
		<ThemeProvider theme={isLightTheme ? LIGHT_THEME : DARK_THEME}>
			<Layout />
			<StickyButton onClick={() => setIsLightTheme(!isLightTheme)}>
				{isLightTheme ? (
					<HeadeIcon src={DARK_MODE} alt="Dark Mode" />
				) : (
					<HeadeIcon
						src={LIGHT_MODE}
						alt="Light Mode"
						className="toggle-icon"
					/>
				)}
			</StickyButton>

			<BaseStyle />
		</ThemeProvider>
	);
}

export default App;
