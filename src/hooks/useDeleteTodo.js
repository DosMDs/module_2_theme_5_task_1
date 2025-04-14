import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useDeleteTodo = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteTodo = (id) => {
		setIsDeleting(true);

		const todoDbRef = ref(db, `todos/${id}`);
		remove(todoDbRef);

		setIsDeleting(false);
	};

	return {
		isDeleting,
		deleteTodo,
	};
};
