import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, titleToSearch, refreshTodosList }) => {
	if (todos.length === 0) {
		if (titleToSearch) {
			return (
				<h1>{`Задач с наименованием содержащем "${titleToSearch}". Не найдено.`}</h1>
			);
		}
		return <h1>Задач пока нет.</h1>;
	}

	return (
		<ul className={styles.todoList}>
			{Object.entries(todos).map(([id, { title, completed }]) => {
				return (
					<TodoItem
						key={id}
						refreshTodosList={refreshTodosList}
						title={title}
						completed={completed}
					/>
				);
			})}
		</ul>
	);
};
