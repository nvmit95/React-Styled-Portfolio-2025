import React from 'react'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Footer_Styles'

const SocialItemData = [
	{ iconId: 'instagramSvg' },
	{ iconId: 'telegramSvg' },
	{ iconId: 'vkSvg' },
	{ iconId: 'linkedinSvg' },
]

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<FlexWrapper direction={'column'} align={'center'}>
				<S.Name>Nikita</S.Name>
				<S.SocialList>
					{SocialItemData.map((s, index) => {
						return (
							<S.SocialItem key={index}>
								<S.SocialLink>
									<Icon
										width={'21'}
										height={'21'}
										viewBox={'0 0 21 21'}
										iconId={s.iconId}
									/>
								</S.SocialLink>
							</S.SocialItem>
						)
					})}
				</S.SocialList>
				<S.Copyright>© 2025 Nikita Mitsin, All Rights Reserved.</S.Copyright>
			</FlexWrapper>
		</S.Footer>
	)
}
