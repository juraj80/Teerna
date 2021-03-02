import { object } from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { Appbar, Icon } from '../../components';
import { SessionContext } from '../../contexts';
import { useConsoleSize } from '../../hooks';
import { Aside, Menu, MenuItem, Label, Badge } from './styles';

const sidebarOptions = [
	{
		idx: 0,
		label: 'Document Manager',
		value: 'DOC_MANAGER',
		icon: 'document',
		lockedForGM: true,
	},
	{
		idx: 1,
		label: 'Document Viewer',
		value: 'DOC_VIEWER',
		icon: 'document',
		lockedForGM: false,
	},
	{
		idx: 2,
		label: 'Requests Review',
		value: 'REQ_REVIEW',
		icon: 'joinreq',
		lockedForGM: true,
	},
	{
		idx: 3,
		label: 'Player List',
		value: 'PLAYER_LIST',
		icon: 'players',
		lockedForGM: false,
	},
	{
		idx: 4,
		label: 'Map Renderer',
		value: 'MAP_VIEW',
		icon: 'map',
		lockedForGM: false,
	},
	{
		idx: 5,
		label: 'Map Manipulation',
		value: 'MAP_ALTER',
		icon: 'map',
		lockedForGM: true,
	},
];

export default function Sidebar({ user }) {
	const { width } = useConsoleSize();
	const { isGM } = useContext(SessionContext);
	const [drawerPos, setDrawerPos] = useState(1);
	const [mainClasses, setMainClasses] = useState([]);
	const [drawerClasses, setDrawerClasses] = useState([]);

	const handleDrawer = () => {
		if (user) {
			drawerPos < 2 ? setDrawerPos(drawerPos + 1) : setDrawerPos(0);
		} else setDrawerPos(0);
	};

	useEffect(() => {
		if (drawerPos === 0) {
			setDrawerClasses([]);
			setMainClasses([]);
		} else if (drawerPos === 1) {
			setDrawerClasses(['drawerIconOnly']); //drawerMin
			setMainClasses(['mainIconOnly']); //mainMin
		} else if (drawerPos === 2) {
			setDrawerClasses(['drawerOpen']);
			setMainClasses(['mainOpen']);
		}
	}, [drawerPos]);

	return (
		<>
			<Appbar handleDrawer={handleDrawer} consoleWidth={`${width}px`} />
			<Aside consoleWidth={`${width}px`} className={drawerClasses.join(' ')}>
				<Menu>
					{sidebarOptions.map(opt => (
						<MenuItem
							key={opt.idx}
							disabled={!isGM && opt.lockedForGM}
							onClick={() => {
								/** set center with opt.value */
							}}
						>
							<Label>
                                <span style={{width: '50px'}}>
								<Icon icon={opt.icon} width='40px' style={{ paddingRight: '16px', justifyContent: 'center'}}/>
								</span>
                                {opt.label}
								<span style={{ position: 'relative', right: 0}}>{opt.lockedForGM && <Badge>GM ONLY</Badge>}</span>
							</Label>
						</MenuItem>
					))}
				</Menu>
			</Aside>
		</>
	);
}

Sidebar.propTypes = {
	user: object.isRequired,
};
