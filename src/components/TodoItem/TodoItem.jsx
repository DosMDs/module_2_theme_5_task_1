import styles from "./TodoItem.module.css";

export const TodoItem = ({ title, completed }) => {
	return (
		<li
			className={`${styles.todoItem} ${
				completed ? styles.completed : ""
			}`}
		>
			<input
				type="checkbox"
				checked={completed}
				className={styles.checkbox}
				disabled={true}
				onChange={() => {}}
			/>
			<span className={styles.title}>{title}</span>
		</li>
	);
};
