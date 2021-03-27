import { useContext, useEffect, useState } from 'react';
import { AuthContext, ModalContext } from '../../../contexts';
import { AuthenticationForm } from '../../compound';
import { Modal } from '../../core';
import { ScreenText, ButtonBlock, Container }from './styles';

export default function Landing() {
    const { setErrors } = useContext(AuthContext);
    const { updateShow, updateLocked, updateContent } = useContext(ModalContext);
    const [modalContent, setModalContent] = useState(undefined);

    useEffect(() => {
        if (modalContent) {
            updateShow(false);
            setErrors([]);
            updateContent(() => ({state}) => (
                <Modal size='large' title={modalContent} state={state} updateShow={updateShow}>
                    {modalContent === 'login' && (<AuthenticationForm initialState='login' />)}
                    {modalContent === 'register' && (<AuthenticationForm initialState='register'/>)}
                </Modal>
            ));
            updateLocked(false);
            updateShow(true);
            setModalContent(undefined);
        }
    }, [modalContent]);

	
    return (
		<Container>
			<ScreenText>
				<h1>Teerna - Your RPG Management Tool</h1>
				<p>
					This interface allows the user to either create or join game-sessions,
					in which document-management, chat, dice-rolling and map-interaction
					is available.
				</p>
				<p>
					Teerna has been developed to be accessible, usable and easy. Try it
					out and let us know what you think!
				</p>
			</ScreenText>
            <div style={{display: 'flex', position: 'relative', justifyContent: 'space-evenly'}}>
			<ButtonBlock onClick={() => setModalContent('login')}>
                <h1>Login</h1>
                <p> All set with an account?
                    Click here to sign in.
                </p>
            </ButtonBlock>
            <ButtonBlock onClick={() => setModalContent('register') }>
                <h1>Sign-up</h1>
                <p> Ready to give it a try?
                    Click here to create an account.
                </p>
            </ButtonBlock>
            </div>
		</Container>
	);
}
