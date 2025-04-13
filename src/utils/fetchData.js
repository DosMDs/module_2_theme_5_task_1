import { API_URL } from "../components/config/env";

export const fetchData = async () => {
	const result = { data: null, error: null };

	try {
		const response = await fetch(`${API_URL}/todos`);
		const data = await response.json();
		result.data = data;
	} catch (error) {
		result.error = error.message;
	}

	return result;
};
