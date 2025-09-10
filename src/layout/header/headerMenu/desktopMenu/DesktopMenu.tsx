import React from 'react'
import { Menu } from '../menu/Menu'
import { S } from '../HeaderMenu_styles'

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
	menuItems: Array<string>
}) => {
	return (
		<S.DesktopMenu>
			<Menu menuItems={props.menuItems} />
		</S.DesktopMenu>
	)
}
