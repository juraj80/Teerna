import { useContext, useState } from 'react';
import { func } from 'prop-types';
import { AuthContext } from '../../../contexts';
import { Button, Input } from '../../';
import { Form, FormTitle } from '../styles';
import { space } from '../../../shared';

const SendJoinRequestModal = ({ joinGame, updateShow }) => {
	const { token, user } = useContext(AuthContext);
	const [guid, setGuid] = useState('');

	return (
		<>
			<FormTitle>Request to Join Game</FormTitle>
			<Form>
				<div>
					<Input
						style={{
							maxWidth: '85%',
							margin: '0 auto',
							marginBottom: space.medium[100],
						}}
						name='guid'
						type='text'
						placeholder='Game ID'
						setValue={setGuid}
						value={guid}
					/>
				</div>
				<div>
					<Button
						fill='fill'
						colour='blue'
						border='minimal'
						type='submit'
						action={() => {
							joinGame({ guid, user, token });
							updateShow();
						}}
						text='Send'
						style={{ margin: '0 auto', minWidth: '50%' }}
					/>
				</div>
			</Form>
		</>
	);
};

SendJoinRequestModal.propTypes = {
	updateShow: func.isRequired,
	joinGame: func.isRequired,
};

export default SendJoinRequestModal;
