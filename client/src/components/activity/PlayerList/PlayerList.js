import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar } from '../../core';
import { AlertContext, SessionContext } from '../../../contexts';
import { Container } from '../styles';
import { ThemeContext } from 'styled-components';
import { Badge } from './styles';
const mockPlayers = [
	{
		id: 0,
		username: 'Nelson',
        gagged: false,
        blocked: true,
	},
	{
		id: 1,
		username: 'Liam',
        gagged: false,
        blocked: false,
	},
	{
		id: 2,
		username: 'Peter',
        gagged: true,
        blocked: false,
	},
	{
		id: 3,
		username: 'Juraj',
        gagged: false,
        blocked: true,
	},
	{
		id: 4,
		username: 'Gabi',
        gagged: true,
        blocked: false,
	},
];

export default function PlayerList() {
    const addAlert = useContext(AlertContext);
	const [players, setPlayers] = useState(mockPlayers);
    const {isGM, guid} = useContext(SessionContext);
    const {bartext, mode} = useContext(ThemeContext);

    useEffect(() => {
		const token = localStorage.getItem('token');
		axios({
			method: 'get',
			url: '/api/player/list',
			data: { guid, token },
		})
			.then(res => res.data && res.data.players)
			.catch(() => addAlert('error', 'Could not get players list of live right now.'));
	}, []);

    const block = p => {};
    const unblock = p => {};
    const gag = p => {};
    const ungag = p => {};

	return <Container>
        {players.map((p) => (
            <div style={{ marginLeft: '32px', display: 'flex', width: '100%', height: '88px', verticalAlign: 'center'}} key={p.id}>
                <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column', maxHeight: '58px', width: '56px', alignItems: 'center'}}>
                    <Avatar altText={p.username} size='small' />
                    <div style={{ color: bartext, fontWeight: mode === 'dark' ? 300 : 500 }}>{p.username}</div>
                </div>
                <div style={{ marginLeft: '32px'}}>
                {isGM ? (
                    <div>
                        <Badge onClick={() => p.blocked ? unblock(p) : block(p)} status='error' disabled>{p.blocked ? 'BLOCK' : 'UNBLOCK'}</Badge>
                        <Badge onClick={() => p.gagged ? ungag(p) : gag(p)} status='warning' disabled>{p.gagged ? 'UNGAG' : 'GAG'}</Badge>
                   </div>
                ) : (
                    <div>
                        {p.blocked && <Badge status='info'>BLOCKED</Badge>}
                        {p.gegged && <Badge status='info'>GAGGED</Badge>}
                    </div>
                )}
                </div>
                
            </div>
        ))}
    </Container>;
}
