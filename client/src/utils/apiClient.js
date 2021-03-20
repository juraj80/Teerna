export default function client(endpoint, customConfig = {}) {
	const config = {
		method: 'GET',
		...customConfig,
	};

	return window
    // @TODO - add to env
		.fetch(`${process.env.REACT_APP_API_URL}`)
		.then(response => response.json());
}
