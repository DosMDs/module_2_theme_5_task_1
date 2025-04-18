import { useEffect, useState } from "react";
import { ref, onValue, orderByChild, query } from "firebase/database";
import { db } from "../firebase";

export const useGetTodos = (sortOrder, titleToSearch) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosDbRef = query(ref(db, "todos"), orderByChild("title"));

		return onValue(todosDbRef, (snapshot) => {
			let loadedTodos = [];
			snapshot.forEach((childSnapshot) => {
				loadedTodos.push({
					id: childSnapshot.key,
					...childSnapshot.val(),
				});
			});

			if (titleToSearch.trim()) {
				loadedTodos = loadedTodos.filter((todo) => {
					return todo.title
						.toLowerCase()
						.includes(titleToSearch.toLowerCase());
				});
			}

			if (sortOrder === "desc") {
				loadedTodos.sort((a, b) => {
					return b.title.localeCompare(a.title);
				});
			}

			setTodos(loadedTodos);
			setIsLoading(false);
		});
	}, [sortOrder, titleToSearch]);

	return { todos, isLoading };
};
