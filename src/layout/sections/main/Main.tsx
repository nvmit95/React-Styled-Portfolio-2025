import styled from 'styled-components'
import photo from '../../../assets/images/Photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={'center'} justify={'space-between'}>
					<InfoContainer>
						<SmallText>Hi There</SmallText>
						<Name>
							I am <span>Nikita Mitsin</span>
						</Name>
						<MainTitle>A Web Developer.</MainTitle>
					</InfoContainer>
					<PhotoWrapper>
						<Photo src={photo} />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	)
}

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 1;
	&::before {
		content: '';
		width: 360px;
		height: 470px;
		border: 5px solid ${theme.colors.accent};
		position: absolute;
		top: -24px;
		left: 24px;
		z-index: -1;
	}
`

const Photo = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
`
const StyledMain = styled.section`
	min-height: 100vh;
	background-color: lightgray;
	display: flex;
`

const MainTitle = styled.h1`
	font-weight: 400;
	font-size: 27px;
`

const Name = styled.h2`
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 700;
	font-size: 50px;
	letter-spacing: 5%;
	margin: 10px 0;
	span {
		position: relative;
		z-index: 0;

		&::before {
			content: '';
			display: inline-block;
			width: 100%;
			height: 20px;
			background-color: ${theme.colors.accent};
			position: absolute;
			bottom: 0;
			z-index: -1;
		}
	}
`

const SmallText = styled.h2`
	font-weight: 400;
	font-size: 14px;
`
