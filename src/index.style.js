import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
@font-face {
	font-family: future-book;
	src: url('./assets/fonts/Futura-Book-Regular.otf');
}

html {
  scroll-behavior: smooth;
}

* {
	margin: 0px;
	padding: 0px;
	font-family: future-book;
	box-sizing: border-box;
	color: ${({ theme }) => theme.textColor}
}

`;

export default BaseStyle;
