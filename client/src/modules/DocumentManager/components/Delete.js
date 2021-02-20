import { Form } from '../styles';

const Delete = () => (
	<Form method='POST' action='http://localhost:5000/delete'>
		<SubmitInput type='submit' value='Delete Game' />
	</Form>
);

export default Delete;
