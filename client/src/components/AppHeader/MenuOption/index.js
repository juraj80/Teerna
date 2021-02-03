import styled from 'styled-components';
import { typography } from '../../../styles';

const Item = styled.li`
	padding: 16px 0;
	width: 100%;
	color: ${({ theme }) => theme.dropdown.text};
	font-size: ${typography.size.dropdown.listitem};
	font-weight: ${typography.weight.body.bold};
	text-align: center;
	background: ${({ theme }) => theme.dropdown.background};
	&:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.dropdown.hover};
	}
	&:last-child {
		border-radius: 0 0 7px 7px;
	}
`;

export default function MenuOption({ descriptor, action }) {
	return <Item onClick={action}>{descriptor}</Item>;
}
