import React, { useContext } from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalContext, ModalProvider } from '../../../contexts';
import { Modal } from './Modal';
import { Button } from '../Button';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';

const ModalTrigger = ({handleClose}) => {
    const { updateShow, updateLocked, updateContent } = useContext(ModalContext);

    const handleOpen = () => {
        updateShow(false);
        updateContent(() => ({state}) => (
            <Modal state={state} updateShow={handleClose || updateShow} title='MODAL' >
                <div/>
            </Modal>
        ));
        updateLocked(false);
        updateShow(true);
    };

    return <Button type='button' action={handleOpen} accent='orange'>OPEN MODAL</Button>
}

const setup = (props) => {
    const { container } = render(
        <ThemeProvider theme={lightTheme}>
            <ModalProvider>
                <ModalTrigger {...props} />
            </ModalProvider>
        </ThemeProvider>
    );
    const button = container.querySelector('button');
    return { button, container };
};

test('modal opens on request', () => {
    const { button } = setup();

    userEvent.click(button);
    const modal = screen.getByRole('dialog');

    expect(modal).toBeDefined();
});

test('modal closes on outside click', () => {
    const handleClose = jest.fn();
    const { button } = setup({handleClose});
    
    userEvent.click(button);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeDefined();

    const closeButton = modal.querySelector('button');
    userEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
});