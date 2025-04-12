import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos }) => {
	return (
		<ul className={styles.todoList}>
			{todos.map((todo) => {
				return <TodoItem key={todo.id} {...todo} />;
			})}
		</ul>
	);
};
