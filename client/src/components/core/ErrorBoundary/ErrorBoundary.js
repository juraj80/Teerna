import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

export default function TeernaErrorBoundary(parentProps) {
	const canReset = Boolean(parentProps.canReset || parentProps.resetKeys);
	return (
		<ErrorBoundary
			fallbackRender={props => <ErrorFallback canReset={canReset} {...props} />}
			{...parentProps}
		/>
	);
}
