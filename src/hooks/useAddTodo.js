import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useAddTodo = () => {
	const [isCreating, setIsCreating] = useState(false);

	const addTodo = (title) => {
		setIsCreating(true);

		const todosDbRef = ref(db, "todos");
		const todo = { title, completed: false };

		push(todosDbRef, todo);
		setIsCreating(false);
	};

	return {
		isCreating,
		addTodo,
	};
};
