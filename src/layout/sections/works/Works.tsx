import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import { Work } from './works/Work'
import { Container } from '../../../components/Container'
import { TubMenu } from './tabMenu/TubMenu'
import { S } from './works/Works_Styles'

const worksItems = ['ALL', 'landing page', 'React', 'spa']

const workData = [
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
]
export const Works = () => {
	return (
		<S.Works>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TubMenu menuItems={worksItems} />
				<FlexWrapper
					justify={'space-between'}
					align={'flex-start'}
					wrap={'wrap'}
				>
					{workData.map((w, index) => {
						return (
							<Work title={w.title} key={index} src={w.src} text={w.text} />
						)
					})}
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
