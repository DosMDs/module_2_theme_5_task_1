import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { TodoForm, TodoList } from "./components";
import styles from "./App.module.css";

function App() {
	const [todos, setTodos] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [newTodo, setNewTodo] = useState("");
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData();
			setTodos(result.data);
			setError(result.error);
			setIsLoading(false);
		};
		getData();
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

	if (isLoading) {
		return <h1>Is Loading...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className={styles.todoContainer}>
			<TodoForm
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				handleSubmit={handleSubmit}
				isCreating={isCreating}
			/>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
