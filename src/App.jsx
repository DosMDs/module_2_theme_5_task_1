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
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getTodos = async () => {
			const result = await fetchData();
			setTodos(result.data);
			setError(result.error);
			setIsLoading(false);
		};
		getTodos();
	}, [refreshTodos]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newTodo.trim()) {
			return;
		}
		setIsCreating(true);
		const addTodo = async (todo) => {
			const result = await fetchData("POST", todo);
			setError(result.error);
			setRefreshTodos(!refreshTodos);
			setIsCreating(false);
			setNewTodo("");
		};

		const todo = { title: newTodo, completed: false };
		addTodo(todo);
	};

	return (
		<div className={styles.todoContainer}>
			<TodoForm
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				handleSubmit={handleSubmit}
				isCreating={isCreating}
			/>
			{error ? (
				<h1>{error}</h1>
			) : isLoading ? (
				<div className={styles.loader} />
			) : (
				<TodoList todos={todos} />
			)}
		</div>
	);
}

export default App;
