import { colours } from '../../../styles';
import { Console } from '../../layout/Console';
import { Button } from '../Button';
import { ErrorText } from './styles';
export default function ErrorFallback({ canReset, error, resetErrorBoundary }) {
	return (
		<Console>
			<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<ErrorText role='alert'>
					An error has occured:{' '}
					<pre style={{ whiteSpace: 'normal', colour: colours.status.error}}>{error.message}</pre>
					{canReset && (
						<Button glowing status='info' type='button' action={resetErrorBoundary}>
							Try Again
						</Button>
					)}
				</ErrorText>
			</div>
		</Console>
	);
}
