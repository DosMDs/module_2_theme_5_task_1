import { useState } from "react";
import { TodoForm, TodoList } from "./components";
import { useGetTodos } from "./hooks";
import styles from "./App.module.css";

function App() {
	const [titleToSearch, setTitleToSearch] = useState("");

	const { todos, isLoading } = useGetTodos();

	return (
		<div className={styles.todoContainer}>
			<TodoForm setTitleToSearch={setTitleToSearch} />
			{isLoading ? (
				<div className={styles.loader} />
			) : (
				<TodoList todos={todos} titleToSearch={titleToSearch} />
			)}
		</div>
	);
}

export default App;
