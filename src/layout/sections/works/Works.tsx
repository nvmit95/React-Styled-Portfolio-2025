import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import { Work } from './works/Work'
import { Container } from '../../../components/Container'
import { TabsStatusType, TubMenu } from './tabMenu/TubMenu'
import { S } from './works/Works_Styles'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

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
		id: 1,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'react',
		id: 2,
	},
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'spa',
		id: 3,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'react',
		id: 4,
	},
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'spa',
		id: 5,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'react',
		id: 6,
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
					<AnimatePresence>
						{filterWorks.map(w => {
							return (
								<motion.div
									style={{
										flexGrow: 1,

										width: '400px',
										maxWidth: '540px',
									}}
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										layout: { duration: 0.4, ease: 'easeInOut' },
										opacity: { duration: 0.3 },
									}}
									key={w.id}
								>
									<Work title={w.title} key={w.id} src={w.src} text={w.text} />
								</motion.div>
							)
						})}
					</AnimatePresence>
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
