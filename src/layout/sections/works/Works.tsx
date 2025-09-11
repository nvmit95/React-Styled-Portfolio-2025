import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import { Work } from './works/Work'
import { Container } from '../../../components/Container'
import { TabsStatusType, TubMenu } from './tabMenu/TubMenu'
import { S } from './works/Works_Styles'
import { useState } from 'react'

// const tabsItems = ['ALL', 'landing page', 'React', 'spa']
const tabsItems: Array<{
	status: TabsStatusType
	title: string
}> = [
	{ title: 'ALL', status: 'all' },
	{ title: 'landing page', status: 'landing' },
	{ title: 'React', status: 'react' },
	{ title: 'spa', status: 'spa' },
]

const worksData = [
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'spa',
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'react',
	},
]
export const Works = () => {
	const [currenFilterStatus, setCurrenFilterStatus] = useState('all')
	let filterWorks = worksData
	if (currenFilterStatus === 'landing') {
		filterWorks = worksData.filter(work => work.type === 'landing')
	}
	if (currenFilterStatus === 'react') {
		filterWorks = worksData.filter(work => work.type === 'react')
	}
	if (currenFilterStatus === 'spa') {
		filterWorks = worksData.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: TabsStatusType) {
		setCurrenFilterStatus(value)
	}

	return (
		<S.Works id={'works'}>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TubMenu
					currenFilterStatus={currenFilterStatus}
					tabsItems={tabsItems}
					changeFilterStatus={changeFilterStatus}
				/>
				<FlexWrapper
					justify={'space-between'}
					align={'flex-start'}
					wrap={'wrap'}
				>
					{filterWorks.map((w, index) => {
						return (
							<Work title={w.title} key={index} src={w.src} text={w.text} />
						)
					})}
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
