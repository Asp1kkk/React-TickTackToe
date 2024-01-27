import styles from "./styles/css/cell.module.css";

const BoardCell = ({ board, curr: { isX, setIsX }, count }) => {
	const handleClick = () => {
		if (board[count] !== null) return;
		board[count] = isX ? "X" : "O";
		setIsX((prev) => !prev);
	};
	return (
		<div onClick={handleClick} className={styles.cell}>
			{board[count]}
		</div>
	);
};

BoardCell.propTypes;

export default BoardCell;
