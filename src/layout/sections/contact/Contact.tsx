import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contact = () => {
	return (
		<StyleContact>
			<SectionTitle>Contact</SectionTitle>
			<StyledForm>
				<Field placeholder={'name'} />
				<Field placeholder={'subject'} />
				<Field as={'textarea'} placeholder={'message'} />
				<Button type='submit'>Send message</Button>
			</StyledForm>
		</StyleContact>
	)
}

const StyleContact = styled.section`
	min-height: 50vh;
	background-color: #bebe6b;
`

const StyledForm = styled.form`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 0 auto;
`

const Field = styled.input``
