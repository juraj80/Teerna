import styled from 'styled-components';
import { element, node, object, oneOfType } from 'prop-types';
import { typography } from '../../styles';

const Wrapper = styled.div`
	width: auto;
	height: 90vh;

	max-width: 1350px;
	max-height: 860px;

	display: flex;
	flex-direction: column;
	overflow: hidden;

	border-radius: 14px;
	background-color: ${({ theme }) => theme.app.background};
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);

	font-size: ${typography.size.app.text};
	font-weight: ${typography.weight.body.regular};
`;

export default function AppWrapper({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

AppWrapper.propTypes = {
	children: oneOfType([element, node, object]).isRequired,
};
