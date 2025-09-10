import styled from 'styled-components'
import { theme } from '../styles/Theme'

/*type ButtonTypeProps = {
	background?: string
} - цвет через пропсы*/

/*   export const Button = styled.button<ButtonTypeProps>*/

export const Button = styled.button`
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1px;
	text-transform: uppercase;
	width: 170px;
	height: 42px;

	position: relative;
	z-index: 0;

	&:hover {
		&::before {
			height: 100%;
			width: 100%;
		}
	}

	&::before {
		content: '';
		display: inline-block;
		width: 50%;
		height: 10px;
		background-color: ${theme.colors.accent};

		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
	}
`
/* background-color ${props => props.background}; - через пропсы - писчать нужно внутри компонента*/
