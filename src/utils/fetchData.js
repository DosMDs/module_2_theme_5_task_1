import { API_URL } from "../config/env";

export const fetchData = async ({
	method = "GET",
	body = "",
	titleToSearch = "",
}) => {
	const result = { data: null, error: null };
	const params = { method };
	let url = `${API_URL}/todos`;

	if (method === "GET") {
		if (titleToSearch.trim()) {
			url += `?title_like=${titleToSearch.trim()}`;
		}
	} else {
		params.headers = { "Content-Type": "application/json;charset=utf-8" };
		params.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, params);
		const data = await response.json();
		result.data = data;
	} catch (error) {
		result.error = error.message;
	}

	return result;
};
