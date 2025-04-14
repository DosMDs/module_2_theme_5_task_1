import styles from "./IconButton.module.css";

export const IconButton = ({ src, alt }) => (
	<button>
		<img src={src} alt={alt} className={styles.icon} />
	</button>
);
