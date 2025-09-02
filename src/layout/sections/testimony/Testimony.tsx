import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { IconWrapper } from '../skills/skill/Skill'
import { Container } from '../../../components/Container'

export const Testimony = () => {
	return (
		<StyleTestimony>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper direction={'column'} align={'center'}>
					<IconWrapper>
						<Icon iconId={'quote'} />
					</IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyleTestimony>
	)
}

const StyleTestimony = styled.section`
	background-color: #1dcab3;
	min-height: 50vh;

	${IconWrapper} {
		margin: 40px 0 72px;
	}
`
