import { useConsoleSize, useContent } from '../../hooks';
import { CentreWrapper } from './styles';

const CentreContent = ({ currentContent }) => {
	const { width } = useConsoleSize();

	return (
		<CentreWrapper centreWidth={`${width * 0.55}px`}>
			{currentContent.content}
		</CentreWrapper>
	);
};

export default CentreContent;
