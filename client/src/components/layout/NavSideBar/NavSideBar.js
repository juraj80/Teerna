import { useContext, useState, useEffect } from 'react';
import { func, number } from 'prop-types';
import { ModalContext, SessionContext } from '../../../contexts';
import { Icon } from '../../core';
import { InvitationForm } from '../../compound/forms';
import { Modal } from '../../core';
import { useConsoleSize } from '../../../hooks';
import { Aside, Badge, Label, Menu, MenuItem } from './styles';

const mainOptions = [
	{
		idx: 0,
		label: 'Game (Story) View',
		value: 'story-view',
		icon: 'game',
		lockedForGM: false,
	},
	{
		idx: 1,
		label: 'Map View',
		value: 'map-view',
		icon: 'map',
		lockedForGM: false,
	},
];

const activityOptions = [
	{
		idx: 0,
		label: 'Switch to Chat & Activities',
		value: 'chat',
		icon: 'chat',
		lockedForGM: false,
	},
	{
		idx: 1,
		label: 'Switch to Document Manager',
		value: 'doc-manager',
		icon: 'document',
		lockedForGM: true,
	},
	{
		idx: 2,
		label: 'Switch to Player List View',
		value: 'player-list',
		icon: 'players',
		lockedForGM: false,
	}
];

export default function NavSideBar({ setActivity, setCentre, drawerPos }) {
	const { width } = useConsoleSize();
	const { isGM } = useContext(SessionContext);
	const {updateShow, updateLocked, updateContent} = useContext(ModalContext);
	const [drawerClasses, setDrawerClasses] = useState([]);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		if (drawerPos === 0) setDrawerClasses([]);
		else if (drawerPos === 1) setDrawerClasses(['drawerIconOnly']);
		else if (drawerPos === 2) setDrawerClasses(['drawerOpen']);
	}, [drawerPos]);

	useEffect(() => {
		if (openModal) {
            updateShow(false);
            updateContent(() => ({state}) => (
                <Modal title="Generate Invite" state={state} updateShow={() => updateShow(false)}>
                   <InvitationForm />
                </Modal>
            ));
            updateLocked(false);
            updateShow(true);
            setOpenModal(false);
        }
    }, [openModal]);

	return (
		<Aside consoleWidth={`${width}px`} className={drawerClasses.join(' ')}>
			<Menu top>
				<MenuItem onClick={() => isGM && setOpenModal(true)}>
					<Label>
						<span style={{ width: '50px' }}>
							<Icon
								icon='plus'
								width='40px'
								style={{ paddingRight: '16px', justifyContent: 'center' }}
							/>
						</span>
						Create Invitation Link
						<span style={{ position: 'relative', right: 0 }}>
								<Badge>GM ONLY</Badge>
						</span>
					</Label>
				</MenuItem>
				{mainOptions.map(opt => (
					<MenuItem
						key={opt.idx}
						onClick={() =>	setCentre(opt.value)}
					>
						<Label>
							<span style={{ width: '50px' }}>
								<Icon
									icon={opt.icon}
									width='40px'
									style={{ paddingRight: '16px', justifyContent: 'center' }}
								/>
							</span>
							{opt.label}
							<span style={{ position: 'relative', right: 0 }}>
								{opt.lockedForGM && <Badge>GM ONLY</Badge>}
							</span>
						</Label>
					</MenuItem>
				))}
                </Menu>
                <Menu bottom>
                    {activityOptions.map(opt => (
                        <MenuItem
                            key={opt.idx}
                            disabled={!isGM && opt.lockedForGM}
                            onClick={() => (isGM || !opt.lockedForGM) && setActivity(opt.value)}
                        >
                            <Label>
                                <span style={{ width: '50px' }}>
                                    <Icon
                                        icon={opt.icon}
                                        width='40px'
                                        style={{ paddingRight: '16px', justifyContent: 'center' }}
                                    />
                                </span>
                                {opt.label}
                                <span style={{ position: 'relative', right: 0 }}>
                                    {opt.lockedForGM && <Badge>GM ONLY</Badge>}
                                </span>
                            </Label>
                        </MenuItem>
				    ))}
			</Menu>
		</Aside>
	);
}

NavSideBar.propTypes = {
    drawerPos: number.isRequired,
	setActivity: func.isRequired,
};
