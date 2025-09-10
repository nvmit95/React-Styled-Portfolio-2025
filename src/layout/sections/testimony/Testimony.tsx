import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { S } from '../skills/Skills_Styles'
import { Container } from '../../../components/Container'

export const Testimony: React.FC = () => {
	return (
		<StyleTestimony>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper direction={'column'} align={'center'}>
					<S.IconWrapper>
						<Icon iconId={'quote'} />
					</S.IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyleTestimony>
	)
}

const StyleTestimony = styled.section`
	background-color: #1dcab3;
	min-height: 50vh;

	${S.IconWrapper} {
		margin: 20px 0 72px;
	}
`
