import { use, useEffect, useState } from "react";
import { TodoItem } from "./components";

function App() {
	const [todos, setTodos] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const data = await response.json();
			setTodos(data);
			setIsLoading(false);
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return <h1>Is Loading...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return <TodoItem id={todo.id} {...todo} />;
				})}
			</ul>
		</div>
	);
}

export default App;
