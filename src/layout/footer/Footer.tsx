import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

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
	background-color: #d18080f0;
`

const Name = styled.span``

const SocialList = styled.ul`
	display: flex;
	gap: 30px;
`

const SocialItem = styled.li``

const SocialLink = styled.a``

const Copyright = styled.small``
