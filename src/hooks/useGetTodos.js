import { useEffect, useState } from "react";
import { fetchData } from "../utils";

export const useGetTodos = (titleToSearch, refreshTodosFlag, setError) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchData({
			search: { title_like: titleToSearch },
		})
			.then((result) => {
				setTodos(result.data);
				setError(result.error);
			})
			.finally(setIsLoading(false));
	}, [refreshTodosFlag, titleToSearch, setError]);

	return { todos, isLoading };
};
