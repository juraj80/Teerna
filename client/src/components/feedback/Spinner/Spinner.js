import { PageSpinner } from './styles';

export default function () {
	return (
		<PageSpinner
			id='loading'
			aria-valuetext='Loading…'
			aria-busy='true'
			aria-live='assertive'
			aria-valuemin='0'
			aria-valuemax='100'
		>
		</PageSpinner>
	);
}
