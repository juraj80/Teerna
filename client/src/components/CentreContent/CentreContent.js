import { useConsoleSize, useContent } from '../../hooks';
import { CentreWrapper } from './styles';

const CentreContent = ({ currentContent }) => {
	const { width, height } = useConsoleSize();
	return (
		<CentreWrapper height={`${height - 96}px`} centreWidth={`${width * 0.6}px`}>
			{currentContent.content}
		</CentreWrapper>
	);
};

export default CentreContent;
