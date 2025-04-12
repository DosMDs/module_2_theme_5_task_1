import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { TodoList } from "./components";
import styles from "./App.module.css";

function App() {
	const [todos, setTodos] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData();
			setTodos(result.data);
			setError(result.error);
			setIsLoading(false);
		};
		getData();
	}, []);

	if (isLoading) {
		return <h1>Is Loading...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className={styles.todoContainer}>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
