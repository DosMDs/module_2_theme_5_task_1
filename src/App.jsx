import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { TodoForm, TodoList } from "./components";
import styles from "./App.module.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [newTodo, setNewTodo] = useState("");
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [titleToSearch, setTitleToSearch] = useState("");
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

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
	}, [refreshTodos, titleToSearch]);

	const handleSubmit = (event) => {
		event.preventDefault();

		setIsCreating(true);

		const todo = { title: newTodo, completed: false };
		fetchData({ method: "POST", body: todo })
			.then((result) => {
				setError(result.error);
				setIsCreating(false);
				setNewTodo("");
			})
			.finally(setRefreshTodos(!refreshTodos));
	};

	const handleUpdate = (id, body) => {
		setIsUpdating(true);
		fetchData({ method: "PUT", id, body })
			.then((result) => {
				setError(result.error);
				setIsUpdating(false);
			})
			.finally(setRefreshTodos(!refreshTodos));
	};

	const handleDelete = (id) => {
		setIsDeleting(true);
		fetchData({ method: "DELETE", id })
			.then((result) => {
				setError(result.error);
				setIsDeleting(false);
			})
			.finally(setRefreshTodos(!refreshTodos));
	};

	const disabled = isCreating || isUpdating || isDeleting;

	return (
		<div className={styles.todoContainer}>
			<TodoForm
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				handleSubmit={handleSubmit}
				disabled={disabled}
				setTitleToSearch={setTitleToSearch}
			/>
			{error ? (
				<h1>{error}</h1>
			) : isLoading ? (
				<div className={styles.loader} />
			) : (
				<TodoList
					todos={todos}
					titleToSearch={titleToSearch}
					disabled={disabled}
					handleUpdate={handleUpdate}
					handleDelete={handleDelete}
				/>
			)}
		</div>
	);
}

export default App;
