import styled from 'styled-components'
import { Link } from '../../../../components/Link'
import { Button } from '../../../../components/Button'

// type MenuPropsType = {
// 	menuItems: Array<string>
// }

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type tubMenuPropsType = {
	tabsItems: Array<{
		status: TabsStatusType
		title: string
	}>
	changeFilterStatus: (value: TabsStatusType) => void
	currenFilterStatus: string
}

export const TubMenu = (props: tubMenuPropsType) => {
	return (
		<StyledTubMenu>
			<ul>
				{props.tabsItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link
								active={props.currenFilterStatus === item.status}
								as={'button'}
								onClick={() => {
									props.changeFilterStatus(item.status)
								}}
							>
								{item.title}
							</Link>
						</ListItem>
					)
				})}
			</ul>
		</StyledTubMenu>
	)
}

const StyledTubMenu = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		max-width: 352px;
		width: 100%;
		margin: 0 auto 40px;
	}

	/* 0 → margin-top: 0; (верхний отступ = 0)
   auto → margin-right: auto; и margin-left: auto; (автоматические отступы по бокам)
   40px → margin-bottom: 40px; (нижний отступ = 40 пикселей) */
`
const ListItem = styled.li``
