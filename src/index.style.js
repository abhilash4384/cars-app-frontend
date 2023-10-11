import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
@font-face {
	font-family: future-book;
	src: url('./assets/fonts/Futura-Book-Regular.otf');
}

html {
  background-color: ${({ theme }) => theme.backgroundColor};
}

::-webkit-scrollbar{
	width: 15px;
}

::-webkit-scrollbar-thumb {
	background: #000000
}

* {
	margin: 0px;
	padding: 0px;
	font-family: future-book;
	box-sizing: border-box;
	color: ${({ theme }) => theme.textColor}
}

main .nav-solid {
	padding: 5px;
	opacity: 1;
}
`;

export default BaseStyle;
