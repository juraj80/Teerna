import { useSetCentreContent } from '../../hooks';
import { CentreWrapper } from './styles';

const CentreContent = () => {
	const { ActiveModule } = useSetCentreContent();

	return (
		<CentreWrapper>
			<ActiveModule />
		</CentreWrapper>
	);
};

export default CentreContent;
