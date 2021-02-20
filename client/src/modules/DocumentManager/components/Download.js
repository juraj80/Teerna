import { Form } from '../styles';

const Download = () => (
	<Form method='GET' action='http://localhost:5000/download'>
		<SubmitInput type='submit' value='Download Game' />
	</Form>
);

export default Download;
