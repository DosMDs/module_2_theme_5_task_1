import { useState } from "react";
import { TodoForm, TodoList } from "./components";
import { useGetTodos } from "./hooks";
import styles from "./App.module.css";

function App() {
	const [titleToSearch, setTitleToSearch] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");

	const { todos, isLoading } = useGetTodos(sortOrder, titleToSearch);

	const changeSortOrder = () => {
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};

	return (
		<div className={styles.todoContainer}>
			<TodoForm
				setTitleToSearch={setTitleToSearch}
				sortOrder={sortOrder}
				changeSortOrder={changeSortOrder}
			/>
			{isLoading ? (
				<div className={styles.loader} />
			) : (
				<TodoList todos={todos} titleToSearch={titleToSearch} />
			)}
		</div>
	);
}

export default App;
