import styles from "./TodoForm.module.css";

export const TodoForm = ({ newTodo, setNewTodo, handleSubmit, isCreating }) => {
	return (
		<form onSubmit={handleSubmit} className={styles.todoForm}>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder="Название задачи"
				className={styles.todoInput}
				required
			/>
			<button
				type="submit"
				className={styles.addBtn}
				disabled={isCreating}
			>
				Добавить новую задачу
			</button>
		</form>
	);
};
