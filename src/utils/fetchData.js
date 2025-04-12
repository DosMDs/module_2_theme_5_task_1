export const fetchData = async () => {
	const result = { data: null, error: null };

	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos"
		);
		const data = await response.json();
		result.data = data;
	} catch (error) {
		result.error = error.message;
	}

	return result;
};
