import styled from 'styled-components'
import photo from '../../../assets/images/Photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper align={'center'} justify={'space-around'}>
				<div>
					<span>Hi There</span>
					<Name>I am Nikita Mitsin</Name>
					<MainTitle>A Web Developer.</MainTitle>
				</div>
				<Photo src={photo} />
			</FlexWrapper>
		</StyledMain>
	)
}

const Photo = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
`
const StyledMain = styled.div`
	min-height: 100vh;
	background-color: lightgray;
`

const MainTitle = styled.h1``

const Name = styled.h2``
