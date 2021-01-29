import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../../contexts';
import { LoginForm, Avatar, Modal } from '../../../components';
import HeaderDropdown from '../HeaderDropdown';

const ProfileSection = styled.div`
	position: absolute;
	width: 300px;
	height: 100%;
	right: 64px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const ProfileSubHeader = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { updateShow, updateContent, updateLocked } = useContext(ModalContext);

	// Auth Modal
	useEffect(() => {
		updateShow(false);
		updateLocked(true);
		updateContent(() => ({ state }) => (
			<Modal
				state={state}
				size='small'
				updateShow={updateShow}
				closeModal={() => updateShow(false)}
			>
				<LoginForm updateShow={updateShow} />
			</Modal>
		));
	}, [updateShow, updateLocked, updateContent]);

	return (
		<ProfileSection>
			<Avatar
				size='small'
				clickable
				action={() => setShowDropdown(!showDropdown)}
			/>
			{showDropdown && (
				<HeaderDropdown displayLoginModal={() => updateShow(true)} />
			)}
		</ProfileSection>
	);
};
