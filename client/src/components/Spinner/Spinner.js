import styled from 'styled-components';
import { ALoading } from '../../styles';

const Loading = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	z-index: 998;

	& div {
		position: absolute;
		opacity: 1;
		border-radius: 50%;
		animation: ${ALoading} 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		background: ${({ theme }) => theme.app.background};
		&:nth-child(2) {
			animation-delay: -0.7s;
		}
	}
`;

export default function Spinner() {
	return (
		<Loading>
			<div></div>
			<div></div>
		</Loading>
	);
}
