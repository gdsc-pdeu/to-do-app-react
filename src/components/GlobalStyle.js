import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body{
		background: ${({theme}) => theme.body};
		transition:0.9s ease;
		color:${({theme})=>theme.text};
	}
	input{
		color: ${({theme}) => theme.text};
		background: ${({theme}) => theme.card};
	}
	.todo-container {
		background: ${({theme}) => theme.card};
	}
`;

export const lightTheme = {
	body:'#f1f1f1',
	text:'#141414',
	card:"#fff"
}

export const darkTheme = {
	body:'#141414',
	text:'#f1f1f1',
	card:"#242424"
}