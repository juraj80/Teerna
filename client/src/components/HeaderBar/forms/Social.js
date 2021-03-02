import { useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { Form, ErrorBox, ButtonGroup } from './styles';
import { AuthContext } from '../../../contexts';
import { IconButton } from '../../IconButton';

export default function Social({ updateShow, closeDropdown }) {
	const { errors, handleGoogleAuth, handleGithubAuth } = useContext(AuthContext);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			updateShow();
			closeDropdown();
		}
	}, [handleGoogleAuth, handleGithubAuth]);

	return (
		<Form>
			{errors && errors.length > 0 ? (
				<ErrorBox active>{errors[errors.length - 1]}</ErrorBox>
			) : (
				<ErrorBox active={false} />
			)}
			<ButtonGroup>
				<IconButton action={handleGoogleAuth} icon='google' colour='light'/>
				<IconButton action={handleGithubAuth} icon='github' colour='dark' />
			</ButtonGroup>
		</Form>
	);
}

Social.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};
