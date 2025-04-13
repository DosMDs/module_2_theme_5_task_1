import { API_URL } from "../config/env";

export const fetchData = async (method = "GET", body = "") => {
	const result = { data: null, error: null };
	const params = { method };

	if (method !== "GET") {
		params.headers = { "Content-Type": "application/json;charset=utf-8" };
		params.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(`${API_URL}/todos`, params);
		const data = await response.json();
		result.data = data;
	} catch (error) {
		result.error = error.message;
	}

	return result;
};
