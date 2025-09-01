import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction={'column'} align={'center'}>
				<Name>Nikita</Name>
				<SocialList>
					<SocialItem>
						<SocialLink>
							<Icon
								width={'21px'}
								height={'21px'}
								viewBox={'0 0 21px 21px'}
								iconId={'instagramSvg'}
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								width={'21px'}
								height={'21px'}
								viewBox={'0 0 21px 21px'}
								iconId={'telegramSvg'}
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								width={'21px'}
								height={'21px'}
								viewBox={'0 0 21px 21px'}
								iconId={'vkSvg'}
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								width={'21px'}
								height={'21px'}
								viewBox={'0 0 21px 21px'}
								iconId={'linkedinSvg'}
							/>
						</SocialLink>
					</SocialItem>
				</SocialList>
				<Copyright>© 2025 Nikita Mitsin, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	background-color: ${theme.colors.primaryBg};
	padding: 40px 0;
`

const Name = styled.span`
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 700;
	font-size: 22px;
	letter-spacing: 3px;
	color: ${theme.colors.font};
`

const SocialList = styled.ul`
	display: flex;
	gap: 20px;
	margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	width: 35px;
	height: 35px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${theme.colors.accent};

	&:hover {
		color: ${theme.colors.primaryBg};
		transform: translateY(-4px);
	}
`

const Copyright = styled.small`
	font-weight: 400;
	font-size: 12px;
	text-align: center;
	opacity: 0.5;
`
