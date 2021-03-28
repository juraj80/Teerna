import { Button } from '../../../core';
import { images } from '../../../../assets';

const defaultDice = ['d4', 'd6', 'd8', 'd12', 'd20'];
export default function ButtonPanel({ sendMessage, setNewMessage, newMessage }) {

    const handleThrow = (type) => {
        setNewMessage(`/${type}`);
        sendMessage();
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '72%'}}>
            {defaultDice.map((dice) => (
                <Button style={{maxWidth: '72px', borderRadius: '50%', background:'transparent'}} type='button' accent='purple' action={() => handleThrow(dice)}>
                    <img style={{ maxWidth: '48px', maxHeight: '48px', objectFit: 'contain' }} src={images.dice[dice]} alt={dice}/>
                </Button>
            ))}
        </div>
    )
}