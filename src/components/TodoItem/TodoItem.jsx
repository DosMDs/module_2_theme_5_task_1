import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import approveIcon from "../../assets/approve.svg";
import cancelIcon from "../../assets/cancel.svg";
import styles from "./TodoItem.module.css";
import { useState, useRef, useEffect } from "react";
import { IconButton } from "../IconButton/IconButton";

export const TodoItem = ({
	id,
	title,
	completed,
	disabled,
	handleUpdate,
	handleDelete,
}) => {
	const [newTitle, setNewTitle] = useState(title);
	const [isEdit, setIsEdit] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (isEdit && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isEdit]);

	const getVisual = () => (
		<>
			<input
				type="checkbox"
				checked={completed}
				className={styles.checkbox}
				disabled={disabled}
				onChange={() =>
					handleUpdate(id, { completed: !completed, title })
				}
			/>
			<span className={styles.title}>{title}</span>
			<IconButton
				src={editIcon}
				alt="Изменить"
				handleOnClick={() => setIsEdit(true)}
				disabled={disabled}
			/>
			<IconButton
				src={deleteIcon}
				alt="Удалить"
				disabled={disabled}
				handleOnClick={() => handleDelete(id)}
			/>
		</>
	);

	const getEditor = () => (
		<>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleUpdate(id, { title: newTitle, completed });
					setIsEdit(false);
				}}
				className={styles.formEdit}
			>
				<input
					type="text"
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
					placeholder={title}
					className={styles.title}
					ref={inputRef}
					required
				/>
				<IconButton
					type="submit"
					src={approveIcon}
					alt="Принять"
					disabled={disabled}
				/>
				<IconButton
					src={cancelIcon}
					alt="Отменить"
					handleOnClick={() => {
						setIsEdit(false);
						setNewTitle(title);
					}}
					disabled={disabled}
				/>
			</form>
		</>
	);

	return (
		<li
			className={`${styles.todoItem} ${
				completed && !isEdit ? styles.completed : ""
			}`}
		>
			{isEdit ? getEditor() : getVisual()}
		</li>
	);
};
