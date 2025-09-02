import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { MobileMenu } from './mobileMenu/MobileMenu'

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify={'space-between'} align={'center'}>
					<Logo />
					<HeaderMenu menuItems={items} />
					<MobileMenu menuItems={items} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

//rafce - команда для быстрого раскрытия компонента

const StyledHeader = styled.header`
	background-color: #1f1f20e5;
	padding: 20px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99999;
`
