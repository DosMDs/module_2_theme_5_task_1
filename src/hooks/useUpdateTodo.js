import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useUpdateTodo = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateTodo = (id, todo) => {
		setIsUpdating(true);

		const todoDbRef = ref(db, `todos/${id}`);

		set(todoDbRef, todo);
		setIsUpdating(false);
	};

	return {
		isUpdating,
		updateTodo,
	};
};
