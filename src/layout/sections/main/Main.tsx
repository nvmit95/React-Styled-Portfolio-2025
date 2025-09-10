import React from 'react'
import photo from '../../../assets/images/Photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './Main_Styles'

export const Main: React.FC = () => {
	return (
		<S.Main>
			<Container>
				<FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
					<S.InfoContainer>
						<S.SmallText>Hi There</S.SmallText>
						<S.Name>
							I am <span>Nikita Mitsin</span>
						</S.Name>
						<S.MainTitle>A Web Developer.</S.MainTitle>
					</S.InfoContainer>
					<S.PhotoWrapper>
						<S.Photo src={photo} />
					</S.PhotoWrapper>
				</FlexWrapper>
			</Container>
		</S.Main>
	)
}
